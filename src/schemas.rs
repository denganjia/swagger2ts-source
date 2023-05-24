use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
#[derive(Deserialize, Serialize, Debug, Clone)]
pub struct DTO {
    pub title: Option<String>,
    pub description: Option<String>,
    pub required: Option<Vec<String>>,
    pub r#type: Option<String>,
    pub properties: Option<BTreeMap<String, Properties>>,
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
    pub definitions: BTreeMap<String, DTO>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Components {
    schemas: BTreeMap<String, DTO>,
}

#[derive(Deserialize, Serialize, Debug)]
pub enum Doc {
    OpenApi(Swagger),
    Swagger(Swagger),
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Paths {}

#[derive(Deserialize, Serialize, Debug)]
pub struct ParameterObj {}
