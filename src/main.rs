use clap::Parser;
use openapi_schema::openapi_from_reader;
use std::env;
use std::path::PathBuf;
use std::time::Instant;
use std::{
    fs::File,
    io::{Error, Read},
};
use swagger2ts::{gen_interface, get_definitions, get_json, save};
use swagger2ts::{openapi::Interface as OpenApiInterface, swagger::Interface as SwaggerInterface};
/// Simple program to generate the typescript interface by swagger json
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    /// Url for Swagger Json
    #[arg(short, long)]
    url: String,

    /// The output file name
    #[arg(short, long, default_value_t = String::from("index.d.ts"))]
    filename: String,

    /// The path of the output
    #[arg(short, long, default_value_t = String::from("api"))]
    outdir: String,
}

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args = Args::parse();
    let start = Instant::now();
    let resp = get_json(&args.url).await.unwrap();
    let interface_str = String::new();
    match resp {
        openapi_schema::Doc::V2(v2) => {
            interface_str.push_str(&SwaggerInterface::generate(&v2));
        }
        openapi_schema::Doc::V3(v3) => {
            interface_str.push_str(&OpenApiInterface::generate(v3));
        }
    }
    let mut filepath = PathBuf::new();
    filepath.push(env::current_dir()?);
    filepath.push(args.outdir);
    filepath.push(args.filename);
    save(interface_str, filepath)?;
    let duration = start.elapsed();
    println!("\n代码执行时间：{:?}\n", duration);
    Ok(())
}
