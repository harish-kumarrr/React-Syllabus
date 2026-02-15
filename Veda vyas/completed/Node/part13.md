# Part 13

1. [x] **MutationObserver** → Browser API to watch DOM changes, useful for analytics or auto-refresh UIs. ✅ 2025-09-12
2. [x] **Vertical Scaling** → Add more CPU/RAM to one server. ✅ 2025-09-12
3. [x] **Horizontal Scaling** → Add more servers/threads to distribute load(Netflix, Uber, Amazon all prioritize horizontal scaling for resilience). ✅ 2025-09-12
4. [x] **SOLID Principles**  →   ✅ 2025-09-09
5. [x] Node.js Event Loop Phases  → ✅ 2025-09-09
6. [x] **timers (`setTimeout`, `setInterval`)**  → ✅ 2025-09-09
7. [x] **I/O callbacks**  → ✅ 2025-09-09
8. [x] **idle, prepare**  → ✅ 2025-09-09
9. [x] **poll**  → ✅ 2025-09-09
10. [x] **check (`setImmediate`)**  → ✅ 2025-09-09
11. [x] **close callbacks (`socket.on("close")`)**  → ✅ 2025-09-09
12. [x] **Bundle Analysis**  → `npm run build && npx source-map-explorer build/static/js/*.js` to analyze bundle size. ✅ 2025-09-09
13. [x] **Context API + Fiber Tree**  → Context avoids prop drilling; Fiber enables concurrency + incremental rendering. ✅ 2025-09-09
14. [x] **React Portals**  → `ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))`. ✅ 2025-09-09
15. [x] **fs.readFileSync vs fs.readFile**  →
* `fs.readFileSync`: blocks main thread.
* `fs.readFile`: async, non-blocking. ✅ 2025-09-09
1. [x] **bcrypt**  → Secure password hashing: ✅ 2025-09-09
```js
const hash = await bcrypt.hash(password, 10);
const isValid = await bcrypt.compare("user@123", hash);
```
42. [x] **Blocking vs Non-Blocking (Node.js)**  → Blocking waits for operation completion, non-blocking continues execution while I/O happens in background. ✅ 2025-09-09
43. [x] **Webpack vs CRA vs Vite**  → * Webpack: powerful but complex.* CRA: opinionated wrapper around Webpack.* Vite: dev speed (esbuild), prod optimization (rollup). ✅ 2025-09-09

44. [x] **Why Vite is Faster**  → Uses esbuild (Go) for dev (super fast) + rollup for prod (tree-shaking, code splitting). ✅ 2025-09-09
45. [x] **Call Stack & Event Loop Flow**  → Call stack → Microtask queue → Macrotask queue → Event loop. ✅ 2025-09-09
46. [x] **Main Thread in Node.js**  → Executes JS code, delegates I/O to libuv’s thread pool. ✅ 2025-09-09
47. [x] **Validation with Yup/Zod**  → ✅ 2025-09-09
```js
import * as yup from "yup"; 
const schema = yup.object({
  email: yup.string().email().required(),
});
```
48. [x] **Tailwind CSS**  → Utility-first CSS framework for rapid UI building. ✅ 2025-09-09    
49. [x] **Sentry**  → Error monitoring tool for frontend & backend apps. ✅ 2025-09-09
50. [x] **SharedArrayBuffer**  → Enables fast data sharing between threads/workers. ✅ 2025-09-09