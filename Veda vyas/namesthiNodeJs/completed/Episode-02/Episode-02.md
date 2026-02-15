1. [x] **Official Node.js Resources** → Essential links for Node.js development: V8 source code, V8.dev, Node.js GitHub, Node.js official site, and ECMAScript specification. ✅ 2025-09-14
```js
https://v8.dev/
https://github.com/v8/v8
https://nodejs.org/
https://github.com/nodejs/node
https://tc39.es/ecma262/
```
2. [x] **ECMAScript Standard** → Understanding ECMAScript as a specification that defines JavaScript behavior, syntax, and built-in objects, ensuring cross-browser consistency. ✅ 2025-09-14

3. [x] **Browser Engine Implementation** → How different browsers implement ECMAScript specification in their engines (V8 for Chrome, JavaScriptCore for Safari, SpiderMonkey for Firefox). ✅ 2025-09-14

4. [x] **V8 Ignition Interpreter** → Understanding V8's Ignition interpreter that converts JavaScript code to bytecode and executes it efficiently.  and Crankshaft was V8's first optimizing compiler. Its job was to take the code that was running frequently ("hot" code) and re-compile it into super-fast, highly optimized machine code. ✅ 2025-09-14

```js
[1,2,3].forEach(x => console.log(x));
```

5. [x] **V8 TurboFan Compiler** → Understanding V8's JIT compiler that optimizes hot functions into highly optimized machine code for better performance. ✅ 2025-09-12

6. [x] **forEach Execution Flow** → Step-by-step understanding of how forEach works internally: JS Code → Ignition → C++ APIs → Callback execution. ✅ 2025-09-12
       
7. [x] **v8 Execution Flow** → In V8, JS code starts in **Ignition** (bytecode), moves to **Sparkplug/Maglev** (quick machine code for warm code), and finally to **TurboFan** (highly optimized machine code for hot code) (Startup → Warm → Hot = More optimization). ✅ 2025-09-12