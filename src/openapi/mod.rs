use serde::{Deserialize, Serialize};
use std::collections::HashMap;
#[allow(dead_code)]
#[derive(Deserialize, Serialize)]
pub struct OPENAPI {
    openapi: String,
    paths: Vec<String>,
    components: Components,
    tags: String,
}

#[derive(Deserialize, Serialize)]
pub struct Components {
    schemas: HashMap<String, String>,
}

#[derive(Deserialize, Serialize)]
pub struct Schemas {
    schemas: HashMap<String, String>,
}
