pub mod Interface {
    use crate::utils::{gen_type, is_english};
    use openapi_schema::v3::{OpenApi, RefOrObject, Reference, Schema};

    fn get_schemas(openapi: &OpenApi) -> Vec<Schema> {
        let mut result: Vec<Schema> = vec![];
        if let Some(components) = openapi.components {
            if let Some(schemas) = &components.schemas {
                for object in schemas.values() {
                    match object {
                        RefOrObject::Object(schema) => {
                            &mut result.push(schema);
                        }
                        _ => (),
                    }
                }
            }
        };
        return result;
    }
}
