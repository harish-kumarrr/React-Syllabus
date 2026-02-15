
1. [ ] **Node.js Event Loop Order** → Understanding the execution order of console.log, process.nextTick, Promise, setImmediate, and setTimeout in Node.js. ✅ 2025-09-12

```js
console.log('start');
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise'));
setImmediate(() => console.log('immediate'));
setTimeout(() => console.log('timeout'), 0);
console.log('end');
```

2. [ ] **Extract Unique Letters** → Find letters that appear in all strings of an array. ✅ 2025-09-12

```js
const words = ["abc", "ab", "a"];
// ["a"]
const word = ["deef", "ddabee", "ebhek"]; // ["e", "e"]

// Solution
const arr = ["abc", "aebc", "earyb"];
const singlearr = arr.slice(0, 1);
const remaingArr = arr.slice(1);
const repeatingKeys = [];
singlearr[0].split("").forEach((val) => {
  let present = true;
  remaingArr.forEach((myvaluArr) => {
    if (!myvaluArr.includes(val)) {
      present = false;
    }
  });
  if (present) {
    repeatingKeys.push(val);
  }
});

repeatingKeys.join("");
```

3. [ ] **Fibonacci Series** → Write Fibonacci series implementation with different approaches. ✅ 2025-09-12

```js
// My approach
const MineApproachfib = (n) => {
  if (n <= 0) return null;
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let arr = [0, 1];
  for (let i = 3; i <= n; i++) {
    arr[i - 1] = arr[i - 2] + arr[i - 3];
  }
  return arr;
};

// Interviewer's preferred approach
const fibInterviewApproach = (n) => {
  if (n <= 0) return null;
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.slice(0, n);
};
```

4. [ ] **setTimeout with var** → Understanding closure behavior with var in setTimeout loops. ✅ 2025-09-12

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 3, 3, 3 (all print 3 due to closure)
```

5. [ ] **this Binding in Functions** → Difference between regular functions and arrow functions regarding this binding. ✅ 2025-09-12

```js
const obj = {
  name: "JS Developer",
  regularFunction: function () {
    console.log(this.name); // "JS Developer"
  },
  arrowFunction: () => {
    console.log(this.name); // undefined (lexical this)
  },
};
obj.regularFunction(); // Output: "JS Developer"
obj.arrowFunction(); // Output: undefined
```

6. [ ] **Promise Execution Order** → Understanding Promise executor and microtask queue execution order. ✅ 2025-09-12

```js
console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
new Promise((resolve, reject) => {
  console.log("3");
  resolve(() => {
    console.log(6);
  });
  console.log(5);
}).then((value) => value());
console.log("4");
// Output: 1, 3, 5, 4, 6, 2
```

7. [ ] **Find Duplicates in Array** → One-line approach to find duplicate values in an array. ✅ 2025-09-12

```js
// My approach
const getarr = () => {
  let arr = [1, 2, 3, 1, 2, 6, 7, 3, 6];
  return arr.filter((value, index) => arr.indexOf(value) != index);
};

// Interviewer's preferred approach
const getDuplicates = (arr) => [
  ...new Set(arr.filter((v, i, a) => a.indexOf(v) !== i)),
];
```
