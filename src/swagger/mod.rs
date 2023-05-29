#[allow(non_snake_case)]
pub mod Interface {
    use crate::{
        save,
        utils::{
            gen_comment, gen_default, gen_type, gen_union_type, get_ref_last_item, is_english,
        },
        Config,
    };
    use std::env;
    use std::path::PathBuf;

    use openapi_schema::v2::{Schema, Swagger};

    fn get_definitions<'a>(swagger: &'a Swagger) -> Option<Vec<&'a Schema>> {
        if let Some(definitions) = &swagger.definitions {
            let collect = definitions
                .values()
                .filter(|schema: &&Schema| is_english(&schema.title.as_ref().unwrap()))
                .collect();
            Some(collect)
        } else {
            None
        }
    }

    fn gen_interface(model: &Schema) -> String {
        let mut i_string = format!(
            r#"
/**
 * {}
 */
export interface {} {{
        "#,
            gen_default(&model.description, String::from("None description")),
            gen_default(&model.title, String::from("NoneTitle")),
        );
        if let Some(properties) = &model.properties {
            // 循环树中的每一组数据
            for property in properties {
                let (name, schema) = property;
                let required = match &model.required {
                    Some(required) => required.contains(&name),
                    _ => false,
                };
                // 如果有描述信息，就生成注释，添加到后面
                if let Some(description) = &schema.description {
                    i_string.push_str(&gen_comment(&description))
                } else {
                    i_string.push_str("\n");
                }
                // 如果json中有enum就生成联合union类型
                if let Some(_enum) = &schema.r#enum {
                    let union_type = &gen_union_type(&_enum);
                    i_string.push_str(&gen_type(&name, union_type, required, false));
                } else {
                    // 如果没有，就看type是不是array
                    if &schema.r#type == &Some(String::from("array")) {
                        let new_type = match &schema.items {
                            Some(items) => {
                                if Option::is_some(&items.original_ref) {
                                    items.original_ref.as_ref().unwrap().as_str()
                                } else if Option::is_some(&items.r#type) {
                                    items.r#type.as_ref().unwrap().as_str()
                                } else if Option::is_some(&items.reference) {
                                    let last_item =
                                        get_ref_last_item(&items.reference.as_ref().unwrap());
                                    match last_item {
                                        Some(item) => {
                                            if is_english(&item) {
                                                return item;
                                            } else {
                                                return "any".to_string();
                                            }
                                        }
                                        None => return "any".to_string(),
                                    }
                                    // reference
                                } else {
                                    "any"
                                }
                            }
                            None => "any",
                        };
                        i_string.push_str(&gen_type(&name, &new_type, required, true))
                    } else {
                        // 如果不是array，就直接使用
                        i_string.push_str(&gen_type(
                            &name,
                            &gen_default(&schema.r#type, "unknown".to_string()),
                            required,
                            false,
                        ))
                    }
                }
            }
        };
        i_string.push_str("\n}");
        i_string
    }

    pub fn generate(swagger: Swagger, config: Config) {
        let definitions = self::get_definitions(&swagger);
        let mut res = String::new();
        if let Some(definitions) = definitions {
            for definition in definitions {
                res.push_str(&self::gen_interface(&definition));
            }
        } else {
            res.push_str("");
        }
        let mut filepath = PathBuf::new();
        filepath.push(env::current_dir().expect("获取当前目录失败"));
        filepath.push(config.outdir.unwrap());
        filepath.push(config.filename.unwrap());
        save(res, filepath).expect("文件保存失败");
    }
}
