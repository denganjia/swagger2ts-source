use clap::Parser;
use std::env;
use std::path::PathBuf;
use std::time::Instant;
use swagger2ts::{get_config, get_json, Config};
use swagger2ts::{openapi::Interface as OpenApiInterface, swagger::Interface as SwaggerInterface};
/// Simple program to generate the typescript interface by swagger json
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    // /// Url for Swagger Json
    // #[arg(short = 'U', long)]
    // url: Option<String>,

    // /// The output file name
    // #[arg(short='F', long, default_value_t = String::from("types.d.ts"))]
    // filename: String,

    // /// The path of the output
    // #[arg(short='O', long, default_value_t = String::from("api"))]
    // outdir: String,
    /// The path of the config json file
    #[arg(short = 'C', long, default_value_t = String::from("./swagger2ts.json"))]
    config: String,
}
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let start = Instant::now();
    let args = Args::parse();

    let mut request_url = String::new();
    // if let Some(url) = &args.url {
    //     request_url.push_str(&url);
    // } else
    // if let Some(config) = &args.config {
    let config_str = get_config(&args.config);
    let config: Config = Config::from_str(&config_str)?;
    if let Some(url) = &config.url {
        request_url.push_str(&url);
    } else {
        panic!("Please provide the url")
    }
    // }
    let document = get_json(&request_url).await;
    let mut interface_str = String::new();
    match document {
        openapi_schema::Doc::V2(v2) => {
            interface_str.push_str(&SwaggerInterface::generate(&v2, config));
        }
        openapi_schema::Doc::V3(v3) => {
            interface_str.push_str(&OpenApiInterface::generate(v3, config));
        }
    }
    // let mut filepath = PathBuf::new();
    // filepath.push(env::current_dir()?);
    // filepath.push(config.outdir.unwrap());
    // filepath.push(config.filename.unwrap());
    // save(interface_str, filepath)?;
    let duration = start.elapsed();
    println!("\n代码执行时间：{:?}\n", duration);
    Ok(())
}
