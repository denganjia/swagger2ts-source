#[allow(non_snake_case)]
pub mod Interface {
    use crate::{
        save,
        utils::{gen_comment, gen_type, get_ref_last_item, is_english},
        Config,
    };
    use openapi_schema::v3::{OpenApi, RefOrObject, Schema};
    use std::collections::BTreeMap;
    use std::env;
    use std::path::PathBuf;

    fn get_schemas(openapi: &OpenApi) -> BTreeMap<String, RefOrObject<Schema>> {
        let mut result: BTreeMap<String, RefOrObject<Schema>> = BTreeMap::new();
        if let Some(components) = &openapi.components {
            if let Some(schemas) = &components.schemas {
                for (name, schema) in schemas {
                    if is_english(&name) {
                        // match schema {
                        //     RefOrObject::Object(schema) => {
                        //         result.insert(name.clone(), schema.clone());
                        //     }
                        //     _ => (),
                        // }
                        result.insert(name.clone(), schema.clone());
                    }
                }
            }
        };
        return result;
    }

    fn gen_interface(kv: (String, RefOrObject<Schema>)) -> String {
        let (name, ref_or_schema) = kv;
        let (description, schema, ref_obj) = match ref_or_schema {
            RefOrObject::Object(schema) => (
                schema
                    .description
                    .clone()
                    .unwrap_or("None Description".to_string()),
                Some(schema.clone()),
                None,
            ),
            RefOrObject::Ref(_ref) => ("None Description".to_string(), None, Some(_ref)),
        };
        let mut i_string = format!(
            r#"
/**
 * {}
 */
export interface {} {{
        "#,
            description, name,
        );
        // 如果是引用的其他类型，就继承 extends
        if Option::is_some(&ref_obj) {
            i_string.clear();
            let last_item = get_ref_last_item(&ref_obj.unwrap().reference);
            let str = format!(
                r#"
        /**
        * {}
        */
        export interface {} extends {} {{}}
                    "#,
                description,
                name,
                last_item.unwrap_or("Object".to_string())
            );
            i_string.push_str(str.as_str())
        } else if Option::is_some(&schema) {
            let schema = &schema.unwrap();
            if let Some(properties) = &schema.properties {
                for (property, ref_or_schema) in properties {
                    let required = match &schema.required {
                        Some(required) => required.contains(property),
                        None => false,
                    };
                    // 根据property是ref或者schema来不同处理
                    match ref_or_schema {
                        RefOrObject::Ref(_ref) => {
                            let last_item = get_ref_last_item(&_ref.reference);
                            let _type = match last_item {
                                Some(item) => {
                                    if is_english(&item) {
                                        item
                                    } else {
                                        "any".to_string()
                                    }
                                }
                                None => "any".to_string(),
                            };
                            let filed_type = gen_type(property, _type.as_str(), required, false);
                            i_string.push_str(&filed_type)
                        }
                        RefOrObject::Object(schema) => {
                            // 如果有描述信息，就生成注释，添加到后面
                            if let Some(description) = &schema.description {
                                i_string.push_str(&gen_comment(&description))
                            } else {
                                i_string.push_str("\n");
                            };
                            // components中的schema中的allOf
                            // 看是不是allOf，如果是就生成：Some1&Some2&Some3
                            if let Some(all_of) = &schema.all_of {
                                let mut res: Vec<String> = Vec::new();
                                for all_item in all_of {
                                    match &**all_item {
                                        RefOrObject::Ref(_ref) => {
                                            let last_item = get_ref_last_item(&_ref.reference);
                                            if let Some(item) = last_item {
                                                if is_english(&item) {
                                                    res.push(item);
                                                }
                                            }
                                        }
                                        RefOrObject::Object(_schema) => {}
                                    };
                                    let _type = res.join("&");
                                    let filed_type = gen_type(property, &_type, required, false);
                                    i_string.push_str(&filed_type);
                                }
                            } else if let Some(one_of) = &schema.one_of {
                                // 看是不是oneOf，如果是就生成：Some1|Some2|Some3
                                let mut res: Vec<String> = Vec::new();
                                for one_item in one_of {
                                    match &**one_item {
                                        RefOrObject::Ref(_ref) => {
                                            let last_item = get_ref_last_item(&_ref.reference);
                                            if let Some(item) = last_item {
                                                if is_english(&item) {
                                                    res.push(item);
                                                }
                                            }
                                        }
                                        RefOrObject::Object(_schema) => {}
                                    };
                                    let _type = res.join("|");
                                    let all_type = gen_type(property, &_type, required, false);
                                    i_string.push_str(&all_type);
                                }
                            } else if let Some(any_of) = &schema.any_of {
                                // 看是不是anyOf，如果是就生成：Some1|Some2|Some3
                                let mut res: Vec<String> = Vec::new();
                                for any_item in any_of {
                                    match &**any_item {
                                        RefOrObject::Ref(_ref) => {
                                            let last_item = get_ref_last_item(&_ref.reference);
                                            if let Some(item) = last_item {
                                                if is_english(&item) {
                                                    res.push(item);
                                                }
                                            }
                                        }
                                        RefOrObject::Object(_schema) => {}
                                    };
                                    let _type = res.join("|");
                                    let filed_type = gen_type(property, &_type, required, false);
                                    i_string.push_str(&filed_type);
                                }
                            } else if &schema.r#type == &Some(String::from("array")) {
                                let new_type = match &schema.items {
                                    Some(items) => {
                                        match &**items {
                                            RefOrObject::Ref(_ref) => {
                                                let last_item = get_ref_last_item(&_ref.reference);
                                                match last_item {
                                                    Some(item) => {
                                                        if is_english(&item) {
                                                            item
                                                        } else {
                                                            "any".to_string()
                                                        }
                                                    }
                                                    None => "any".to_string(),
                                                }
                                            }
                                            RefOrObject::Object(_schema) => {
                                                _schema.r#type.clone().unwrap_or("any".to_string())
                                            }
                                        }
                                    }
                                    None => "any".to_string(),
                                };
                                i_string.push_str(&gen_type(&property, &new_type, required, true));
                            } else {
                                i_string.push_str(&gen_type(
                                    &property,
                                    &schema.r#type.clone().unwrap_or("any".to_string()),
                                    required,
                                    false,
                                ));
                            }
                        }
                    }
                }
            }
        }
        i_string.push_str("\n}");
        i_string
    }

    pub fn generate(openapi: OpenApi, config: Config) {
        let schemas = self::get_schemas(&openapi);
        let mut interface_string = String::new();
        for schema in schemas {
            let i_string = self::gen_interface(schema);
            interface_string.push_str(i_string.as_str());
        }
        let mut filepath = PathBuf::new();
        filepath.push(env::current_dir().expect("获取当前目录失败"));
        filepath.push(config.outdir.unwrap());
        filepath.push(config.filename.unwrap());
        save(interface_string, filepath).expect("文件保存失败");
    }
}
