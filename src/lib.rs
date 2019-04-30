#![feature(test)]

extern crate test;

use wasm_bindgen::prelude::*;
use test::black_box;

#[wasm_bindgen(js_name = acceptString)]
pub fn accept_string(s: String) {
    black_box(s);
}
