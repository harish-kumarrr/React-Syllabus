1. [ ] **Node.js Module Scope** → Understanding that each module has its own scope and variables/functions do not leak globally, requiring explicit sharing via require/export or import/export. ✅ 2025-09-12

2. [ ] **CommonJS (CJS) Module System** → Understanding CommonJS as the default module system in Node.js that loads synchronously and runs in non-strict mode by default. ✅ 2025-09-12

```js
z = 10; // Executes without throwing an error

// Export/Import examples
// temp.js
console.log(module.exports); // {}
module.exports = { a, b };
// OR
module.exports.a = a;
module.exports.b = b;

// anotherFile.js
const { a, b } = require('./temp'); // object destructure
const aFunc = require('./temp');    // default export
```

3. [ ] **ECMAScript Modules (ESM)** → Understanding ESM as the modern module system that loads asynchronously and runs in strict mode by default. ✅ 2025-09-12

```js
z = 10; // Throws ReferenceError (must declare variables)

// package.json configuration
{
  "type": "module"
}
```

4. [ ] **Export and Import Patterns** → Understanding default exports vs named/object exports in both CommonJS and ESM systems. ✅ 2025-09-12

```js
// Default Export
module.exports = f1;
const f1 = require('./file');

// Named/Object Export
module.exports = { f1 };
const { f1 } = require('./file');
```

5. [ ] **Node.js Built-in Utilities** → Exploring built-in Node.js utilities like util.promisify and util.format for enhanced functionality. ✅ 2025-09-12

```js
const util = require('node:util');
``` 