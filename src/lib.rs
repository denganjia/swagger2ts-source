use serde::{Deserialize, Serialize};
use std::fs::File;
use std::io::prelude::*;
use std::path::PathBuf;
pub mod openapi;
pub mod swagger;
mod utils;
#[allow(unused_imports)]
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
pub async fn get_json(url: &str) -> openapi_schema::Doc {
    let url_response = reqwest::get(url).await;
    let url_response = match url_response {
        Ok(response) => response,
        Err(e) => panic!("{e}"),
    };
    let resp = url_response.text().await;
    let resp = match resp {
        Ok(resp) => resp,
        Err(_) => panic!("The url is not correct"),
    };
    let resp = openapi_schema::from_str(&resp);
    match resp {
        Ok(resp) => resp,
        Err(_) => panic!("The Json document conversion failure"),
    }
}

pub fn get_config(filepath: &str) -> String {
    // let filepath = "./trans_config.json";
    let config_file = File::open(filepath);
    let mut config_json = String::new();
    config_file
        .unwrap()
        .read_to_string(&mut config_json)
        .unwrap();
    config_json
}

#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct Config {
    pub url: Option<String>,
    pub filename: Option<String>,
    pub outdir: Option<String>,
    pub request: Option<bool>,
    pub request_config: Option<RequestConfig>,
}
#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct RequestConfig {
    pub function_template: Option<String>,
    pub ignore_path: Option<String>,
    pub prefix: Option<String>,
    pub split: Option<bool>,
}

impl Config {
    pub fn from_str(str: &str) -> Result<Config, serde_json::Error> {
        return serde_json::from_str::<Config>(str);
    }
}
