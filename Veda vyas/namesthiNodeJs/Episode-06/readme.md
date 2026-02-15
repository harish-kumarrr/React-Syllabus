1. [ ] **JavaScript Garbage Collection** → Understanding that JavaScript has built-in garbage collection for automatic memory management, unlike languages like C/C++ that require manual memory management. ✅ 2025-09-12

2. [ ] **Node.js Single Call Stack** → Understanding that Node.js runs on a single call stack by default and creates a global execution call stack when code executes. ✅ 2025-09-12

3. [ ] **Libuv Role** → Understanding that libuv handles thread pool, event loop, timeouts, and other asynchronous operations in Node.js. ✅ 2025-09-12

4. [ ] **Stream Processing** → Understanding how to use streams for efficient data processing, especially for large files with compression. ✅ 2025-09-12

```js
const fs = require("fs");
const zlib = require("zlib")

fs.createReadStream("largefile").pipe(zlib.createGzip()).pipe(res).on("finish", () => {})
```