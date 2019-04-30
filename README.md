Some string benchmarks for wasm-bindgen

These contain some strings taken from https://github.com/serde-rs/json-benchmark/blob/master/data/twitter.json that, I believe, realistically showcases commom usecases.

To build:

```bash
wasm-pack build --release -t web
```

To run, start a static server in a local directory. I'm using [`serve`](https://www.npmjs.com/package/serve) as it correctly serves mime types for WASM.

Then open http://localhost:5000/benches/bench.html in the browser and wait for benchmarks to finish.
