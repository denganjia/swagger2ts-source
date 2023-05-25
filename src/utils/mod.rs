use regex::Regex;

/// 生成注释
pub fn gen_comment(comment: &str) -> String {
    format!(
        r#"
/**
* {}
*/
"#,
        comment
    )
}
/// 返回这个字符串是不是纯英文
pub fn is_english(text: &str) -> bool {
    let reg = Regex::new(r"^[a-zA-Z]+$").unwrap();
    reg.is_match(text)
}

/// 将enum转化为ts的联合类型
pub fn gen_union_type(union: &[String]) -> String {
    union
        .iter()
        .map(|u| format!("'{}'", u))
        .collect::<Vec<_>>()
        .join("|")
}

/// 拿到Option<T>中的T，没有就返回一个T的clone
pub fn gen_default<T: Clone>(target: &Option<T>, default: T) -> T {
    if let Some(v) = target {
        v.clone()
    } else {
        default
    }
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
pub fn gen_type(property: &str, r#type: &str, required: bool, array: bool) -> String {
    let required: &str = if required { r#""# } else { "?" };
    let array = if array { "[]" } else { r#""# };

    let _type = if r#type == "integer" {
        r#"number"#
    } else {
        r#type
    };
    format!("{property}{required}: {_type}{array};")
}

/// 获取$ref路径中最后一项
pub fn get_ref_last_item(str: &str) -> Option<String> {
    let re = Regex::new(r".*/(.*)").unwrap();
    if let Some(cap) = re.captures(str) {
        Some(String::from(cap.get(1).unwrap().as_str()))
    } else {
        None
    }
}
