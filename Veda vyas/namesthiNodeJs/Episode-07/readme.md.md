1. [ ] **CommonJS Module Loading** → Understanding that CommonJS modules load synchronously in Node.js using require(). ✅ 2025-09-12

2. [ ] **File I/O Thread Pool** → Understanding that file I/O operations like fs.readFile use libuv's thread pool, where worker threads block synchronously until OS returns data, then queue callbacks to poll phase. ✅ 2025-09-12

3. [ ] **Network I/O Event System** → Understanding that network I/O like http.get uses libuv with OS kernel event system (epoll/kqueue/IOCP) without worker threads, scaling better for thousands of sockets. ✅ 2025-09-12

4. [ ] **File vs Network I/O Differences** → Understanding that file I/O is thread-pool based because libuv must block on OS syscalls, while network I/O is kernel-event based since sockets are natively async at OS level. ✅ 2025-09-12