1. [ ] **Node.js Console Implementation** → Understanding that the console object in Node.js is not from V8 but implemented by Node.js itself as thin wrappers around process.stdout.write and process.stderr.write. ✅ 2025-09-12

2. [ ] **V8 Engine Limitations** → Understanding that V8 is just a JavaScript engine that doesn't provide console.log or any I/O functions, requiring host environment to inject console object. ✅ 2025-09-12

3. [ ] **Console vs Process Output** → Understanding the relationship between console.log and process.stdout.write in Node.js. ✅ 2025-09-12

```js
console.log("hello");
// is effectively doing:
process.stdout.write("hello\n");
```

4. [ ] **Core Module for Printing** → Understanding that actual low-level printing in Node.js is handled by tty and stream modules, with console using process.stdout and process.stderr. ✅ 2025-09-12

5. [ ] **Console Polyfill Implementation** → Understanding how to create a minimal polyfill of console.log using process.stdout.write to see the underlying mechanism. ✅ 2025-09-12