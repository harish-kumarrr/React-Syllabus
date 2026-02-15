1. [ ] **CommonJS Module Wrapper** → Understanding how CommonJS files are wrapped and immediately invoked by Node.js to provide scope isolation and module API access. ✅ 2025-09-12

2. [ ] **require() Resolution Process** → Understanding the 5-step process: Resolve → Load & wrap → Execute & export → Cache → V8 execution. ✅ 2025-09-12

3. [ ] **Module Exports Usage** → Understanding the difference between adding properties to exports vs assigning to module.exports for single vs multiple exports. ✅ 2025-09-12

```js
// Multiple exports
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

// Single export
module.exports = function main() { /* ... */ };
```

4. [ ] **Module Privacy and Access** → Understanding how variables/functions are kept private through function wrapper and how module.exports is accessed. ✅ 2025-09-12

5. [ ] **CommonJS vs ESM Essentials** → Understanding key differences: ESM uses import/export, no CommonJS wrapper, no require/__filename/__dirname, uses import.meta.url for paths. ✅ 2025-09-12

6. [ ] **File Type Extensions** → Understanding .cjs = CJS, .mjs = ESM, .js depends on package.json "type" field (default CJS). ✅ 2025-09-12

7. [ ] **Module Interoperability** → Understanding that you cannot require() an ES module, must use dynamic import() from CJS, or createRequire() from ESM to load CJS. ✅ 2025-09-12

8. [ ] **Handy Module APIs** → Understanding require.resolve(), require.cache, require.main, and module.paths for advanced module operations. ✅ 2025-09-12

9. [ ] **Module Gotchas** → Understanding that modules share global but file-scoped variables don't leak, JSON require() returns parsed data, and circular dependencies show partial exports. ✅ 2025-09-12

10. [ ] **CJS vs ESM Comparison** → Understanding the major differences between CommonJS and ES Modules in syntax, loading, static analysis, scope, and strict mode. ✅ 2025-09-12

11. [ ] **Module Interop Rules** → Understanding that CJS can import ESM using await import(), but ESM cannot use require() to load CJS modules directly. ✅ 2025-09-12

12. [ ] **Package.json Type Field** → Understanding the crucial "type" field in package.json for ESM configuration and .mjs/.cjs file extensions. ✅ 2025-09-12

13. [ ] **Dual-Mode Packages** → Understanding best practices for library authors to publish packages compatible with both CJS and ESM using "exports" field. ✅ 2025-09-12

```json
"exports": {
  "require": "./lib/index.cjs",
  "import": "./lib/index.mjs"
}
```

14. [ ] **Live Bindings vs Snapshots** → Understanding that ESM provides live bindings while CJS provides snapshots of exported values. ✅ 2025-09-12

15. [ ] **Top-level Await** → Understanding that ESM supports top-level await due to asynchronous loading, while CJS requires async wrapper workarounds. ✅ 2025-09-12

16. [ ] **Node.js Polyfills** → Understanding what polyfills are in Node.js and implementing setTimeout polyfill for compatibility. ✅ 2025-09-12