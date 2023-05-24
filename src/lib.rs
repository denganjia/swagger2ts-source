// use serde_json::{Map, Result as SerdeJsonResult};
use regex::Regex;
use serde_json;
use std::collections::BTreeMap;
use std::fs::File;
use std::io::prelude::*;
use std::path::PathBuf;

mod openapi;
mod schemas;
pub mod swagger;
mod utils;
#[allow(unused_imports)]
use crate::openapi::OPENAPI;
use crate::schemas::{Properties, Swagger, DTO};
pub fn save(str: String, filename: PathBuf) -> std::io::Result<()> {
    let parent_dir = filename.parent().unwrap();
    if !parent_dir.exists() {
        std::fs::create_dir_all(parent_dir)?;
    }
    let mut file = File::create(&filename)?;
    file.write_all(str.as_bytes())?;
    Ok(())
}

/// 根据url获取api的json
pub async fn get_json(
    url: &str,
) -> Result<openapi_schema::v2::Swagger, Box<dyn std::error::Error>> {
    let resp = reqwest::get(url).await?.text().await?;
    let resp: openapi_schema::v2::Swagger = serde_json::from_str(&resp)?;
    Ok(resp)
}

/// 生成注释
/// #Example
/// ```
/// let text = "some comment";
/// let comment = swagger2ts::gen_comment(text);
/// assert_eq!(comment,r#"
/// /**
///  * some comment
///  */
/// "#)
/// ```
pub fn gen_comment(text: &str) -> String {
    format!(
        r#"
/**
 * {}
 */
"#,
        text
    )
}

/// 生成类型定义
/// #Example
/// ```
/// let property = "name";
/// let r#type = "string";
/// let required = false;
/// let gen_type_res = swagger2ts::gen_type(property,r#type,required);
/// assert_eq!(gen_type_res,"name?: string;");
/// ```
pub fn gen_type(property: &str, r#type: &str, required: bool) -> String {
    let required: &str = if required { r#""# } else { "?" };
    let _type = if r#type == "integer" {
        r#"number"#
    } else {
        r#type
    };
    format!("{property}{required}: {_type};")
}

fn is_english(text: &str) -> bool {
    let reg = Regex::new(r"^[a-zA-Z]+$").unwrap();
    reg.is_match(text)
}

pub fn get_definitions<'a>(swagger: &'a Swagger) -> Vec<&'a DTO> {
    swagger
        .definitions
        .values()
        .filter(|dto| is_english(&dto.title.as_deref().unwrap_or_default()))
        .collect()
}

pub fn gen_interface(model: &DTO) -> String {
    let mut i_string = format!(
        r#"
/**
 * {}
 */
export interface {} {{
"#,
        gen_default(&model.description, "No description".to_string()),
        gen_default(&model.title, "NoneTitle".to_string()),
    );

    // let properties = model.properties.clone().unwrap_or(HashMap::new());
    let properties = gen_default(&model.properties, BTreeMap::new());
    let property_keys = properties.keys();
    if property_keys.len() > 0 {
        for property in property_keys {
            let Properties {
                description,
                r#type,
                items,
                r#enum,
            } = properties
                .get(property)
                .as_ref()
                .and_then(|props| Some(props.clone()))
                .unwrap_or_else(|| &Properties {
                    description: None,
                    r#type: None,
                    items: None,
                    r#enum: None,
                });

            let required = match model.required.clone() {
                Some(required) => required.contains(property),
                _ => false,
            };
            match description {
                Some(desc) => i_string.push_str(&gen_comment(&desc)),
                _ => i_string.push_str("\n"),
            }
            if let Some(_enum) = r#enum {
                i_string.push_str(&gen_type(property, &gen_union_type(_enum), required))
            } else if r#type.clone().unwrap_or("any".to_string()) == "array" {
                let mut new_type = String::new();
                if let Some(item) = items {
                    if let Some(item_type) = item.r#type.clone() {
                        if item_type == "integer" {
                            new_type.push_str("number[]");
                        } else {
                            new_type.push_str(&format!("{item_type}[]"));
                        }
                    } else if let Some(original_ref) = item.original_ref.clone() {
                        if is_english(&original_ref) {
                            new_type.push_str(&format!("{original_ref}[]"));
                        } else {
                            new_type.push_str("any[]");
                        }
                    }
                };
                i_string.push_str(&gen_type(property, &new_type, required))
            } else {
                i_string.push_str(&gen_type(
                    property,
                    &gen_default(r#type, "any".to_string()),
                    required,
                ))
            }
        }
    }
    i_string.push_str("\n}");
    i_string
}

fn gen_union_type(union: &[String]) -> String {
    union
        .iter()
        .map(|u| format!("'{}'", u))
        .collect::<Vec<_>>()
        .join("|")
}

fn gen_default<T: Clone>(target: &Option<T>, default: T) -> T {
    if let Some(v) = target {
        v.clone()
    } else {
        default
    }
}
