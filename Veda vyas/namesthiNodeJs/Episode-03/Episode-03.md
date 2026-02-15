1. [ ] **Global Object in Browser** → Understanding that `this`, `window`, `self`, `frames`, and `globalThis` all refer to the global object in browser environment. ✅ 2025-09-12

2. [ ] **Global Object in Node.js** → Understanding that `global` and `globalThis` refer to the global object in Node.js, while `this` behaves differently depending on context. ✅ 2025-09-12

```js
console.log(this); // What does this log here?
console.log(global === globalThis); // true
```

3. [ ] **globalThis Standard** → Understanding that TC39/OpenJS community introduced `globalThis` in 2020 as a standard way to access the global object consistently across environments. ✅ 2025-09-12