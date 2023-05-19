// pub mod json_struct {
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
#[derive(Deserialize, Serialize, Debug, Clone)]
pub struct DTO {
    pub title: Option<String>,
    pub description: Option<String>,
    pub required: Option<Vec<String>>,
    pub r#type: Option<String>,
    pub properties: Option<HashMap<String, Properties>>,
}
#[derive(Deserialize, Serialize, Debug, Clone)]
pub struct Items {
    #[serde(rename = "originalRef")]
    pub original_ref: Option<String>,
    pub r#type: Option<String>,
    #[serde(rename = "$ref")]
    pub r#ref: Option<String>,
}

#[derive(Deserialize, Serialize, Debug, Clone)]
pub struct Properties {
    pub r#type: Option<String>,
    pub description: Option<String>,
    pub items: Option<Items>,
    pub r#enum: Option<Vec<String>>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Swagger {
    swagger: String,
    pub definitions: HashMap<String, DTO>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Components {
    schemas: HashMap<String, DTO>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Doc {
    swagger: Option<String>,
    definitions: HashMap<String, DTO>,
    openapi: Option<String>,
    components: Option<Components>,
    path: Vec<String>,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct ApiPath {}
// }
