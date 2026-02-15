1. [ ] **crypto vs node:crypto Import** → Understanding the difference between `crypto` and `node:crypto` imports - both provide same functionality but `node:crypto` is explicit and safer. ✅ 2025-09-12

2. [ ] **Traditional crypto Import** → Understanding the older way of importing crypto module using `require("crypto")` as a package specifier. ✅ 2025-09-12

3. [ ] **Modern node:crypto Import** → Understanding the newer Node.js v14.18.0+ prefix `node:` for all core modules to prevent accidental shadowing and make imports explicit. ✅ 2025-09-12

```js
// Traditional way
const crypto = require("crypto");

// Modern recommended way
import { createHash } from "node:crypto";
```

4. [ ] **Core Module Security** → Understanding that `node:crypto` prevents accidental shadowing from malicious npm packages and ensures you're using Node.js built-in modules. ✅ 2025-09-12

5. [ ] **V8 vs Node.js Core Modules** → Understanding that V8 only runs JavaScript while Node.js core modules like crypto are written in C++ on top of libuv and system libraries. ✅ 2025-09-12

6. [ ] **PBKDF2 Offloading** → Understanding why PBKDF2 is computationally expensive and offloaded to libuv's thread pool with OpenSSL to prevent event loop blocking. ✅ 2025-09-12

7. [ ] **Crypto Execution Flow** → Understanding the flow: JS call → Node.js C++ bindings → OpenSSL → libuv thread pool → event loop callback. ✅ 2025-09-12

8. [ ] **Event Loop Phase for Crypto** → Understanding that completion of async crypto operations like pbkdf2, scrypt, randomBytes is queued and executed during the Poll phase. ✅ 2025-09-12
 