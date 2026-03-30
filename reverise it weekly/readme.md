1. detect clinet timezone
   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
   console.log(timezone); // e.g. "Asia/Kolkata"

2. 