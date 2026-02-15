
1. [x] **File Stream Response** → Use `fs.createReadStream()` + `pipe()` to stream files in Node.js ✅ 2025-09-11

2. [x] **Error Handling** → Use `try/catch`, `.catch()`, or error event listeners to handle errors gracefully ✅ 2025-09-09

3. [x] **Security Tips** → Validate inputs, use HTTPS, and sanitize user data to prevent vulnerabilities ✅ 2025-09-09

4. [x] **Express.js** → Simplifies request/response handling in Node.js ✅ 2025-09-09

5. [x] **Debug Tip** → Use `console.time()` and DevTools to measure response times ✅ 2025-09-09

6. [x] **Interview Tip** → Explain async handling via event loop + libuv ✅ 2025-09-09

7. [x] **Common Questions** → Event loop, streams, V8, worker threads, sending JSON, npm ✅ 2025-09-09

8. [x] **Summary Table** → V8 runs code, event loop manages flow, libuv handles I/O, etc. ✅ 2025-09-09

9. [x] **JWT + HttpOnly Cookies** → Use JWT with HttpOnly cookies to prevent XSS and CSRF ✅ 2025-09-09

10. [x] **XSS Prevention** → Never trust `dangerouslySetInnerHTML`; sanitize with DOMPurify ✅ 2025-09-09

11. [x] **Event-Driven Architecture** → Software design where events trigger reactions instead of sequential calls. ✅ 2025-09-09

12. [x] **Pub/Sub Architecture** → Publisher sends messages to a broker; subscribers listen without direct coupling. ✅ 2025-09-09

13. [x] **EventEmitter `emit()` vs `on()`** → `emit()` triggers an event; `on()` registers a listener for that event. ✅ 2025-09-09

14. [x] **Kafka as Event System** → Kafka persists, partitions, and replays events at scale; MongoDB isn’t optimized for ordered, durable, replayable event streams. ✅ 2025-09-09

15. [x] **Testing API-driven UIs** → Use Jest + React Testing Library + MSW to mock APIs and validate UI behavior. *(Amazon mocks APIs in frontend tests to decouple UI from backend availability)* ✅ 2025-09-09

16. [x] **Common Frontend Security Issues** → XSS, CSRF, clickjacking, sensitive data exposure, open redirects. *(Netflix mandates CSP + input sanitization as a baseline)* ✅ 2025-09-09

17. [x] **Protecting Forms from Script Injection** → Use server-side sanitization (e.g., DOMPurify), validate input on both client & server, escape HTML before rendering. ✅ 2025-09-09

18. [x] **SCSS vs CSS Modules vs Tailwind** →  
* SCSS: Power with nesting & mixins  
* CSS Modules: Scoped styles per component  
* Tailwind: Utility-first, fast prototyping, avoids naming issues  
*(Tailwind + CSS Modules combo is becoming industry default)* ✅ 2025-09-09

19. [x] **How Vite/CRA/Webpack Work** →  
* Webpack: JS bundler with loaders/plugins  
* CRA: Abstraction over Webpack  
* Vite: Dev server using `esbuild` + production bundling via `rollup`  
✅ 2025-09-09

20. [x] **Webpack Code Splitting** → Split bundles into small chunks using `import()` (dynamic imports). *(Reduces initial load, improves caching, loads only required modules)* ✅ 2025-09-09

21. [x] **Managing Environment Variables in Frontend**  → CRA and Vite use and dont expose secrets.  ✅ 2025-09-09

22. [x] **Writing Test Cases**  → Tools: Jest, RTL, Cypress. ✅ 2025-09-09

23. [x] **CSS Breakpoints**  →  mobile, tablet, laptop, desktop ✅ 2025-09-09

24. [x]    **Kafka vs RabbitMQ vs EventEmitter** →   Kafka: pull-based, persistent logs, replay events. RabbitMQ: push-based, message queue. Node EventEmitter: in-memory, per-process event bus. ✅ 2025-09-09

25. [x] **queueMicrotask vs process.nextTick**   → Execution order:
`process.nextTick()` → `queueMicrotask()` → `Promise.then()` → Macrotasks. ✅ 2025-09-09

26. [ ] **Implement Custom Promise same as Native Promise**  → ✅ 2025-09-09