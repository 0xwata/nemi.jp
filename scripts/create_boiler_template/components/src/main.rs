use std::env;
use std::io::{Write};
use std::fs;
use std::fs::File;

const BASE_COMPONENT_FILE_PATH: &str = "../../../src/components";

fn main() -> std::io::Result<()> {
  println!("*** 開始 ***");

  let args: Vec<_> = env::args().collect();

  let ref dname_out = args[1];

  let dpath = format!( "{}/{}", BASE_COMPONENT_FILE_PATH, dname_out);
  let tsx_fname = format!( "{}.{}", dname_out, "tsx");
  let tsx_fpath = format!( "{}/{}", dpath, tsx_fname);
  let ts_fpath = format!("{}/{}", dpath, "index.ts");

  println!("Make a Directory");
  fs::create_dir(dpath)?;

  println!("Make a TS File");
  let ts_file_content = create_index_ts_content(dname_out.to_string());
  let mut ts_file = File::create(ts_fpath)?;
  ts_file.write_all(ts_file_content.as_bytes())?;

  println!("Make a TSX File");
  let tsx_file_content = create_xx_tsx_content(dname_out.to_string());
  let mut tsx_file = File::create(tsx_fpath)?;
  tsx_file.write_all(tsx_file_content.as_bytes())?;

  println!("*** 終了 ***");
  Ok(())
}

fn create_index_ts_content(input: String ) -> String {
    format!(r#"export {{ {} }} from "./{}";"#, input, input)
}

// TODO: 複数行の文字列リテラルのインデント解消.（現状だと、コードだと、見にくい)
fn create_xx_tsx_content(input: String ) -> String {
    format!(
        r#"import type {{ FC }} from "react";
export const {}: FC = () => {{
    return (
        <div>{}</div>
    );
}};"#, input, input
    )
}