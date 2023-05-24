pub mod Interface {

    use crate::utils::{gen_comment, gen_default, gen_type, gen_union_type, is_english};

    use openapi_schema::v2::{Schema, Swagger};
    use regex::Regex;

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
                    Some(requied) => requied.contains(&name),
                    _ => false,
                };
                // 如果有描述信息，就生成注释，添加到后面
                if let Some(description) = &schema.description {
                    i_string.push_str(&gen_comment(&description))
                };
                // 如果json中有enum就生成联合union类型
                if let Some(_enum) = &schema.r#enum {
                    let union_type = &gen_union_type(&_enum);
                    i_string.push_str(&gen_type(&name, union_type, required, false));
                } else {
                    // 如果没有，就看type是不是array
                    if &schema.r#type == &Some(String::from("array")) {
                        let new_type = {
                            if let Some(item) = &schema.items {
                                if let Some(item_type) = &item.r#type {
                                    item_type
                                } else if let Some(_ref) = &schema.reference {
                                    let re = Regex::new(r".*/(.*)").unwrap();
                                    if let Some(cap) = re.captures(&_ref) {
                                        let cap = cap.get(1).unwrap().as_str();
                                        if is_english(cap) {
                                            cap
                                        } else {
                                            "any"
                                        }
                                    } else {
                                        "any"
                                    }
                                } else {
                                    "any"
                                }
                            } else {
                                "any"
                            }
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

    pub fn generate<'a>(swagger: &'a Swagger) -> String {
        let definitions = self::get_definitions(swagger);
        let mut res = String::new();
        if let Some(definitions) = definitions {
            for definition in definitions {
                res.push_str(&self::gen_interface(&definition));
            }
            return res;
        } else {
            return String::from("value");
        }
    }
}
