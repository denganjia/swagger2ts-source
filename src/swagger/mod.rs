#[allow(non_snake_case)]
pub mod Interface {
    use crate::{
        save,
        utils::{
            gen_comment, gen_default, gen_type, gen_union_type, get_ref_last_item, is_english,
        },
        Config, RequestConfig,
    };
    use openapi_schema::v2::{
        Operation, ParamInEnum, ParameterOrRef, ParameterType, PathItem, ResponseOrRef, Schema,
        Swagger,
    };
    use std::collections::hash_map::DefaultHasher;
    use std::hash::{Hash, Hasher};
    use std::{
        collections::{BTreeMap, HashMap},
        env,
    };
    use std::{path::PathBuf, vec};
    struct Cache<'a> {
        cache: HashMap<&'a String, String>,
    }

    impl Cache<'_> {
        fn new() -> Self {
            Cache {
                cache: HashMap::new(),
            }
        }

        fn get(&self, k: &String) -> std::option::Option<&std::string::String> {
            self.cache.get(k)
        }
    }

    fn get_definitions<'a>(
        swagger: &'a Swagger,
        cacher: &mut Cache<'a>,
    ) -> BTreeMap<String, Schema> {
        if let Some(definitions) = &swagger.definitions {
            for key in definitions.keys() {
                if !is_english(&key) {
                    let mut hasher = DefaultHasher::new();
                    let s = key;
                    s.hash(&mut hasher);
                    let hash_value = hasher.finish();
                    let lower_five_bits = (hash_value % 1000000) as u32;
                    cacher
                        .cache
                        .insert(&key, format!("Interface_{}", lower_five_bits));
                } else {
                    cacher.cache.insert(&key, key.clone().to_string());
                }
            }
            definitions.clone()
        } else {
            BTreeMap::new()
        }
    }

    fn gen_interface(model: &Schema, cacher: &Cache) -> String {
        let title = match &model.title {
            Some(title_) => {
                if is_english(&title_) {
                    title_
                } else {
                    &cacher.get(title_).unwrap()
                }
            }
            None => "NoneTitle",
        };
        let mut i_string = format!(
            r#"
/**
 * {}
 */
export interface {} {{
        "#,
            gen_default(&model.description, model.title.clone().unwrap()),
            title,
        );
        if let Some(properties) = &model.properties {
            // 循环树中的每一组数据
            i_string.push_str(&gen_ts_propertites(
                properties,
                &model.required.clone().unwrap_or(vec![]),
                &cacher,
            ));
        };
        i_string.push_str("\n}\n");
        i_string
    }

    fn gen_api_function(
        paths: BTreeMap<String, PathItem>,
        config: &Config,
        cacher: &Cache,
    ) -> Vec<String> {
        // let type_config = config.filename;
        let RequestConfig {
            function_template,
            prefix,
            split,
            ignore_path,
        } = config.request_config.clone().unwrap();
        if function_template.is_none() {
            panic!("请传入请求函数模板！");
        }
        let function_template = function_template.unwrap_or("".to_string());
        let _split = split.unwrap_or(false);
        let ignore_path = ignore_path.unwrap_or("".to_string());
        let api_string = format!(
            r#"
{}
        "#,
            prefix.unwrap_or("".to_string())
        );
        let mut api_functions: Vec<String> = Vec::new();
        for (path, path_item) in paths {
            if path_item.get.is_some() {
                let operation = path_item.get.unwrap();
                api_functions.push(self::replace_api_funtion(
                    function_template.clone(),
                    operation,
                    "get",
                    &path.replace(&ignore_path, ""),
                    cacher,
                ));
            }
            if path_item.post.is_some() {
                let operation = path_item.post.unwrap();
                api_functions.push(self::replace_api_funtion(
                    function_template.clone(),
                    operation,
                    "post",
                    &path.replace(&ignore_path, ""),
                    cacher,
                ));
            }
        }
        api_functions.insert(0, api_string);
        api_functions
    }

    fn replace_api_funtion(
        f_str: String,
        operation: Operation,
        method: &str,
        url: &str,
        cacher: &Cache,
    ) -> String {
        let Operation {
            tags: _,
            summary,
            description: _,
            external_docs: _,
            operation_id,
            consumes: _,
            produces: _,
            parameters,
            responses,
            schemas: _,
            deprecated: _,
            security: _,
            extensions: _,
        } = operation;
        let response_type = match responses.get("200").unwrap() {
            ResponseOrRef::Response {
                description: _,
                schema,
                headers: _,
                examples: _,
                extensions: _,
            } => {
                let schema = schema.clone();
                let mut type_ = String::new();
                if schema.is_none() {
                    type_.push_str("any")
                } else {
                    if let Some(original_ref) = &schema.clone().unwrap().original_ref {
                        if is_english(original_ref) {
                            type_.push_str(original_ref);
                        } else {
                            let hasher = cacher.get(original_ref).unwrap();
                            type_.push_str(&hasher);
                        };
                    } else {
                        type_.push_str(&format_property_type_str(
                            &schema.clone().unwrap().r#type.unwrap(),
                        ));
                    }
                }
                type_
            }
            ResponseOrRef::Ref { reference } => {
                let last_item = get_ref_last_item(&reference);
                let mut type_ = String::new();
                if is_english(&last_item.clone().unwrap()) {
                    type_.push_str(&last_item.unwrap());
                } else {
                    let hasher = cacher.get(&last_item.unwrap()).unwrap();
                    type_.push_str(&hasher);
                };
                type_
            }
        };
        let parameters = parameters.unwrap_or(vec![]);
        let mut params_type = String::new();
        let mut flag = false;
        if parameters.len() > 0 {
            for parameter in parameters {
                match parameter {
                    ParameterOrRef::Ref(refer) => {
                        let last_item = get_ref_last_item(&refer.reference);
                        params_type.push_str(
                            cacher
                                .cache
                                .get(&last_item.clone().unwrap())
                                .unwrap_or(&last_item.clone().unwrap())
                                .as_str(),
                        );
                        break;
                    }
                    ParameterOrRef::Parameter(p) => match p.r#in {
                        ParamInEnum::Query => {
                            let mut property_type = format_property_type(&p.r#type.unwrap());
                            if !is_english(&p.name) {
                                if !params_type.contains("[key:string]:any;") {
                                    params_type.push_str("[key:string]:any;\n");
                                }
                            } else {
                                if property_type == "[]" {
                                    let item = &p.items.unwrap();
                                    property_type.insert_str(
                                        0,
                                        match &item.r#type {
                                            openapi_schema::v2::ItemsType::String => "string",
                                            openapi_schema::v2::ItemsType::Number => "number",
                                            openapi_schema::v2::ItemsType::Integer => "number",
                                            openapi_schema::v2::ItemsType::Boolean => "boolean",
                                            openapi_schema::v2::ItemsType::Array => "[]",
                                        },
                                    );
                                }
                                let param_type = gen_type(
                                    &p.name,
                                    &property_type,
                                    p.required.unwrap_or(false),
                                    false,
                                );
                                params_type.push_str(&param_type);
                                params_type.push_str("\n");
                            }
                            flag = true;
                        }
                        ParamInEnum::Body => {
                            params_type.clear();
                            flag = false;
                            if let Some(original_ref) = &p.schema.clone().unwrap().original_ref {
                                if is_english(original_ref) {
                                    params_type.push_str(original_ref);
                                } else {
                                    let hasher = cacher.get(original_ref).unwrap();
                                    params_type.push_str(&hasher);
                                };
                            } else {
                                if &p.schema.clone().unwrap().r#type.unwrap() == "array" {
                                    let item = &p.schema.clone().unwrap().items.unwrap();
                                    if let Some(original_ref) = &item.original_ref {
                                        let hasher = cacher.get(original_ref).unwrap();
                                        params_type.push_str(&hasher);
                                    } else {
                                        params_type.push_str(&format_property_type_str(
                                            &item.r#type.clone().unwrap(),
                                        ));
                                    }
                                    params_type.push_str("[]");
                                } else {
                                    params_type.push_str(&format_property_type_str(
                                        &p.schema.clone().unwrap().r#type.unwrap(),
                                    ));
                                }
                            }
                        }
                        _ => (),
                    },
                }
            }
            if flag {
                params_type.insert_str(0, "{");
                params_type.push_str("}")
            }
        } else {
            params_type.push_str("any")
        }
        let function_str = f_str
            .replace("{description}", summary.unwrap().as_str())
            .replace("{method}", method)
            .replace("{name}", operation_id.unwrap().as_str())
            .replace("{url}", format!("'{}'", url).as_str())
            .replace("{response}", response_type.as_str())
            .replace("{parameter}", &params_type);
        function_str
    }

    fn format_property_type(type_str: &ParameterType) -> String {
        match type_str {
            ParameterType::String => "string".to_string(),
            ParameterType::Number => "number".to_string(),
            ParameterType::Integer => "number".to_string(),
            ParameterType::Boolean => "boolean".to_string(),
            ParameterType::Array => "[]".to_string(),
            ParameterType::File => "any".to_string(),
        }
    }
    fn format_property_type_str(type_str: &String) -> String {
        if type_str.contains("integer") {
            return String::from("number");
        } else {
            return type_str.to_string();
        }
    }

    fn gen_ts_propertites(
        properties: &BTreeMap<String, Schema>,
        requireds: &Vec<String>,
        cacher: &Cache,
    ) -> String {
        let mut propertites_string = String::new();
        for property in properties {
            let (name, schema) = property;
            let required = requireds.contains(&name);
            // 如果有描述信息，就生成注释，添加到后面
            if let Some(description) = &schema.description {
                propertites_string.push_str(&gen_comment(&description))
            } else {
                propertites_string.push_str("\n");
            }
            // 如果json中有enum就生成联合union类型
            if let Some(_enum) = &schema.r#enum {
                let union_type = &gen_union_type(&_enum);
                propertites_string.push_str(&gen_type(&name, union_type, required, false));
            } else if &schema.r#type == &Some(String::from("array")) {
                // 如果没有，就看type是不是array
                let mut p_type = String::new();
                if let Some(items) = &schema.items {
                    if let Some(original_ref) = &items.original_ref {
                        if is_english(&original_ref) {
                            p_type.push_str(&original_ref.as_str());
                        } else {
                            p_type.push_str(
                                &cacher
                                    .cache
                                    .get(&original_ref)
                                    .unwrap_or(&"any".to_string())
                                    .as_str(),
                            );
                        }
                    } else if let Some(_type) = &items.r#type {
                        p_type.push_str(&_type.as_str());
                    } else if let Some(reference) = &items.reference {
                        let last_item = get_ref_last_item(reference);
                        if let Some(item) = last_item {
                            if is_english(&item) {
                                p_type.push_str(&item);
                            } else {
                                p_type.push_str(&cacher.get(&item).unwrap().as_str());
                            }
                        }
                    } else {
                        p_type.push_str("any")
                    }
                } else {
                    p_type.push_str("any");
                }
                propertites_string.push_str(&gen_type(&name, &p_type, required, true))
            } else if let Some(originalRef) = &schema.original_ref {
                let mut p_type = String::new();
                if is_english(&originalRef) {
                    propertites_string.push_str(&gen_type(&name, originalRef, required, false))
                } else {
                    p_type.push_str(&cacher.get(&originalRef).unwrap().as_str());
                    propertites_string.push_str(&gen_type(&name, &p_type, required, false))
                }
            } else {
                // 如果不是array，就直接使用
                propertites_string.push_str(&gen_type(
                    &name,
                    &gen_default(&schema.r#type, "unknown".to_string()),
                    required,
                    false,
                ))
            }
        }
        propertites_string
    }

    pub fn generate(swagger: Swagger, config: Config) {
        let mut cacher = Cache::new();
        // 生成interface
        let mut res = String::new();
        let definitions = self::get_definitions(&swagger, &mut cacher);
        if definitions.len() > 0 {
            for (_, definition) in &definitions {
                res.push_str(&self::gen_interface(&definition, &cacher));
            }
        };
        // 存储interface
        let mut filepath = PathBuf::new();
        filepath.push(env::current_dir().expect("获取当前目录失败"));
        filepath.push(&config.outdir.clone().unwrap());
        filepath.push(&config.filename.clone().unwrap());
        save(res, filepath).expect("文件保存失败");

        let gen_api = &config.request.unwrap_or(false);
        if *gen_api {
            // 生成api函数
            let mut functions = gen_api_function(swagger.paths.clone(), &config, &cacher);
            // 存储api函数
            let mut filepath = PathBuf::new();
            filepath.push(env::current_dir().expect("获取当前目录失败"));
            filepath.push(&config.outdir.unwrap());
            filepath.push("api.ts");
            let interfaces = cacher.cache.values();
            let interfaces_str: Vec<String> = interfaces.map(|inter| inter.to_string()).collect();
            let inset_str = format!(
                "import {{{}}} from './{}';\n",
                interfaces_str.join(",\n"),
                &config.filename.unwrap()
            );
            functions.insert(0, inset_str);
            save(functions.join("\n"), filepath).expect("文件保存失败");
        }
    }
}
