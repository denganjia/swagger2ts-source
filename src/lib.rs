use std::error::Error;
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
pub async fn get_json(url: &str) -> Result<openapi_schema::Doc, impl Error> {
    let resp = reqwest::get(url).await.unwrap().text().await;
    // let resp: openapi_schema::v2::Swagger = serde_json::from_str(&resp)?;
    let resp = openapi_schema::from_str(&resp.unwrap());
    // Ok(resp)
    resp
}
