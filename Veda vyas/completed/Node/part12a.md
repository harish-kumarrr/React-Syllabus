 
1. [x] What exactly are micro-frontends, and how do they compare to microservices in the backend world
2. [x] Why do we use micro-frontends in large-scale applications instead of building a single monolithic frontend?
3. [x] Can you walk me through how to set up a simple micro-frontend project using Webpack Module Federation, and maybe share a minimal code example?
4. [x] Once we’ve set up host and remote applications using Module Federation, how do we configure scripts (like in package.json) and run them locally?
5. [x] If two micro-frontends need to share data (like user info or cart items), what approaches can we use to enable that communication?
6. [x] Suppose App1 (host) manages login, and App2/App3 are integrated micro-frontends with their own auth flows. If App2 crashes or its token expires, how do we ensure App1 and App3 don’t automatically get logged out?
7. [x] What’s the best way to implement logout across micro-frontends? Should logging out from one app (say App1) also log the user out from App2 and App3? How do we distinguish between explicit logout vs token expiry? ✅ 2025-09-03
8. [x] In real-world super-apps like Amazon, which embed Amazon Pay, Prime Video, etc. inside one ecosystem — how is authentication, session management, and data sharing actually handled across these micro-frontends? ✅ 2025-09-03
9. [x] How do micro-frontends impact performance (bundle size, runtime integration), and what strategies can we use to optimize them? ✅ 2025-09-03
10. [x] Can micro-frontends built with different frameworks (React, Angular, Vue) coexist in the same application? If yes, what are the challenges? ✅ 2025-09-03
11. [x] How do we achieve independent deployments for micro-frontends while still maintaining a seamless user experience in the host app? ✅ 2025-09-03
12. [x] What are the common pitfalls when sharing state between micro-frontends (e.g., token conflicts, CSS leakage), and how do we avoid them? ✅ 2025-09-03
13. [x] What are the security considerations when handling authentication and sensitive data across multiple micro-frontends? ✅ 2025-09-03
14. [x] The threadpool's default size is **4**. You can increase it by setting the `UV_THREADPOOL_SIZE` environment variable
15. [x] **N-API** is the universal connector. It’s a special layer that lets your C++ code talk to Node.js.
 