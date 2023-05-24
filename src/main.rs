use clap::Parser;
use std::env;
use std::path::PathBuf;
use std::time::Instant;
use swagger2ts::swagger::Interface;
use swagger2ts::{gen_interface, get_definitions, get_json, save};
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
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args = Args::parse();
    let start = Instant::now();
    let resp = get_json(&args.url).await.unwrap();

    let interface_str = Interface::generate(&resp);
    // let definitions = get_definitions(&resp);
    // let mut interface = String::new();
    // for define in definitions {
    //     // save_file(gen_interface(&define)).unwrap();
    //     interface.push_str(&gen_interface(&define))
    // }
    let mut filepath = PathBuf::new();
    filepath.push(env::current_dir()?);
    filepath.push(args.outdir);
    filepath.push(args.filename);
    save(interface_str, filepath)?;
    // let json: Swagger = serde_json::from_str(&resp)?;
    let duration = start.elapsed();
    println!("\n代码执行时间：{:?}\n", duration);
    Ok(())
}
