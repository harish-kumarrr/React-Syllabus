1. [ ] **fs.readFileSync Blocking Behavior** → Understanding that fs.readFileSync blocks the main thread (event loop thread) by running file I/O synchronously on the same thread. ✅ 2025-09-12

2. [ ] **fs.readFile Async Behavior** → Understanding that fs.readFile uses libuv's thread pool (separate worker threads) for disk I/O while keeping the main thread free for other operations. ✅ 2025-09-12

3. [ ] **Sync vs Async File Operations** → Understanding the key difference: sync version blocks main thread with no concurrency, while async version uses worker threads for scalability. ✅ 2025-09-12

4. [ ] **Production Best Practices** → Understanding that async fs.readFile should be used in production servers (like Express apps) while readFileSync is only suitable for startup config loading or scripts. ✅ 2025-09-12
 