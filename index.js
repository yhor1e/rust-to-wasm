const js = import("./node_modules/@yhorie/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
