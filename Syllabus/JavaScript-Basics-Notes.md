# JavaScript Basics – Simple & Easy Notes

Simple notes with clear examples for learning JavaScript. Use these as a quick reference.

---

## 1. Introduction

**JavaScript** runs in the browser (and in Node.js on the server). It lets you:
- Change what the user sees (DOM).
- React to clicks, forms, etc. (events).
- Store and process data (variables, arrays, objects).
- Call APIs and build full apps (with React, etc.).

You write it in **.js** files or inside **&lt;script&gt;** in HTML.

---

## 2. History of JavaScript (short)

- Created in **1995** by Brendan Eich for Netscape.
- First named **LiveScript**, then **JavaScript** (Java was popular then; they are different languages).
- Later standardized as **ECMAScript** (ES). ES6 (2015) added let, const, arrow functions, classes, etc.
- Today: runs in every browser and on the server (Node.js).

---

## 3. Download and Install VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com).
2. Download for your OS (Windows / Mac / Linux).
3. Run the installer and follow the steps.
4. Optional: install extensions like **Live Server**, **ESLint**, **Prettier**.

---

## 4. How to Execute JavaScript Code

**In the browser:**
- Create an **.html** file and add `<script src="app.js"></script>` (or write JS inside `<script>...</script>`).
- Open the HTML file in the browser (or use Live Server). Open DevTools (F12) → Console to see `console.log()` and errors.

**In Node.js:**
- Install Node from [nodejs.org](https://nodejs.org).
- In terminal: `node app.js` (runs the file).

**Quick test:** Create `test.js` with `console.log("Hi");` and run `node test.js`.

---

## 5. Hello World Program

```javascript
console.log("Hello, World!");
```

In browser: open the page, press F12 → Console. You should see `Hello, World!`.

---

## 6. Intro to Variables

Variables **store values** so you can reuse them.

```javascript
let name = "Alice";
let age = 25;
console.log(name);  // Alice
console.log(age);   // 25
```

You can change the value later (with `let`). Use **let** or **const** (avoid old `var` in new code).

---

## 7. Rules for Naming Variables

- Use only **letters**, **digits**, **underscore (_)**, **dollar ($)**.
- Must **not** start with a digit.
- Use **camelCase** for variables: `userName`, `totalCount`.

**Valid:** `name`, `user_name`, `_private`, `count2`  
**Invalid:** `2count`, `user-name`, `let` (reserved word)

---

## 8. let Keyword

- Declares a variable you can **reassign**.
- Block-scoped: exists only inside the `{ }` where it’s declared.

```javascript
let x = 10;
x = 20;   // OK
console.log(x);  // 20

if (true) {
  let y = 5;
}
// console.log(y);  // Error – y not defined here
```

---

## 9. const Keyword

- Declares a variable you **cannot reassign** (constant).
- Use **const** by default; use **let** only when you need to reassign.

```javascript
const PI = 3.14;
// PI = 3.14159;  // Error

const user = { name: "Alice" };
user.name = "Bob";   // OK – we're changing a property, not reassigning user
// user = {};        // Error – cannot reassign user
```

---

## 10. String Indexing

Strings are like a list of characters. Index starts at **0**.

```javascript
let s = "Hello";
console.log(s[0]);   // "H"
console.log(s[1]);   // "e"
console.log(s.length);  // 5
```

**Negative index:** Not in plain JS. Use `s[s.length - 1]` for last character.

---

## 11. Useful String Methods

Methods return a **new** string; they don’t change the original.

| Method | Example | Result |
|--------|---------|--------|
| **length** | `"hi".length` | 2 |
| **toUpperCase()** | `"hi".toUpperCase()` | `"HI"` |
| **toLowerCase()** | `"HI".toLowerCase()` | `"hi"` |
| **trim()** | `"  hi  ".trim()` | `"hi"` |
| **includes(str)** | `"hello".includes("ell")` | true |
| **indexOf(str)** | `"hello".indexOf("l")` | 2 |
| **slice(start, end)** | `"hello".slice(1, 4)` | `"ell"` |
| **split(sep)** | `"a,b,c".split(",")` | `["a","b","c"]` |
| **replace(a, b)** | `"hi".replace("i","o")` | `"ho"` |

```javascript
let text = "  Hello World  ";
console.log(text.trim().toLowerCase());  // "hello world"
```

---

## 12. typeof, String to Number, Number to String

**typeof** – get the type of a value:
```javascript
typeof "hello";   // "string"
typeof 42;       // "number"
typeof true;     // "boolean"
typeof undefined;  // "undefined"
typeof null;     // "object" (known quirk)
typeof [];       // "object"
```

**String → Number:**
```javascript
Number("42");      // 42
Number("42px");    // NaN
parseInt("42");    // 42
parseInt("42px");  // 42
parseFloat("3.14"); // 3.14
+"100";            // 100 (unary plus)
```

**Number → String:**
```javascript
String(42);    // "42"
(42).toString();  // "42"
42 + "";       // "42"
```

---

## 13. String Concatenation

Joining strings with **+**:
```javascript
let first = "Hello";
let second = "World";
console.log(first + " " + second);  // "Hello World"
console.log("Price: " + 10);        // "Price: 10" (number becomes string)
```

---

## 14. Template Strings (Template Literals)

Use **backticks** and **${ }** to embed variables and expressions:
```javascript
let name = "Alice";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// My name is Alice and I am 25 years old.

console.log(`Sum: ${10 + 20}`);  // Sum: 30
```

Easier to read than long concatenation with `+`.

---

## 15. undefined, null, bigint

- **undefined** – variable declared but not given a value; missing property.
- **null** – “no value” on purpose (you set it).
- **bigint** – for very large integers. Add **n** or use `BigInt()`.

```javascript
let a;
console.log(a);        // undefined

let b = null;
console.log(b);        // null

let big = 9007199254740991n;
let big2 = BigInt("9007199254740991");
```

---

## 16. Booleans and Comparison Operators

**Booleans:** `true` and `false`.

**Comparison operators:**

| Operator | Meaning | Example |
|----------|---------|--------|
| **==** | Equal (loose; converts type) | `5 == "5"` → true |
| **===** | Strict equal (same type and value) | `5 === "5"` → false |
| **!=** | Not equal (loose) | `5 != "6"` → true |
| **!==** | Strict not equal | `5 !== "5"` → true |
| **&lt;** **&gt;** **&lt;=** **&gt;=** | Less / greater / etc. | `3 < 5` → true |

**Best practice:** Prefer **===** and **!==** to avoid surprises.

---

## 17. if else, Truthy and Falsy Values

**if / else:**
```javascript
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

**Falsy** (treated as false in conditions): `false`, `0`, `""`, `null`, `undefined`, `NaN`.  
**Truthy:** Everything else (e.g. `1`, `"hello"`, `[]`, `{}`).

```javascript
if ("hello") console.log("truthy");   // runs
if (0) console.log("no");            // does not run
if (null) console.log("no");         // does not run
```

---

## 18. Ternary Operator

Short form of **if-else** for one value:
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"
```

**Format:** `condition ? valueIfTrue : valueIfFalse`

---

## 19. And (&&) and Or (||) Operators

- **&&** – true only if both sides are truthy. If first is falsy, returns first; else returns second.
- **||** – true if at least one side is truthy. If first is truthy, returns first; else returns second.

```javascript
console.log(true && true);   // true
console.log(true && false); // false
console.log(true || false); // true

let name = "";
console.log(name || "Guest");  // "Guest" (default value)
```

---

## 20. Nested if else

**if** and **else** inside another **if** or **else**:
```javascript
let age = 25;
let hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    console.log("You can enter");
  } else {
    console.log("Buy a ticket");
  }
} else {
  console.log("Too young");
}
```

---

## 21. if else if

Multiple conditions in a row:
```javascript
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

---

## 22. Switch Statement

When you compare **one value** to many options:
```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown");
}
```

**break** is important; without it, execution “falls through” to the next case.

---

## 23. Object and Array Destructuring

**Object destructuring** – take properties into variables:
```javascript
let user = { name: "Alice", age: 25 };
let { name, age } = user;
console.log(name);  // "Alice"
console.log(age);   // 25

// Rename
let { name: userName } = user;
console.log(userName);  // "Alice"
```

**Array destructuring** – take items by position:
```javascript
let arr = [10, 20, 30];
let [a, b, c] = arr;
console.log(a, b, c);  // 10 20 30

let [first, ...rest] = arr;
console.log(first, rest);  // 10 [20, 30]
```

---

## 24. Rest Operator (...)

Collects “the rest” into an array:
```javascript
function sum(a, b, ...others) {
  let total = a + b;
  others.forEach(n => total += n);
  return total;
}
console.log(sum(1, 2, 3, 4));  // 10

let [x, ...rest] = [1, 2, 3, 4];
console.log(rest);  // [2, 3, 4]
```

---

## 25. Callback

A **callback** is a function you pass to another function, to be called later (e.g. when something finishes or on each item).

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Alice", function () {
  console.log("Callback ran");
});
// Hello Alice
// Callback ran

// Same with arrow function
greet("Bob", () => console.log("Done"));
```

Used everywhere: **setTimeout**, **forEach**, **map**, **filter**, event listeners, etc.

---

## 26. forEach Method

Runs a function **once per item** in an array. Does not return a new array.
```javascript
let arr = [1, 2, 3];
arr.forEach(function (item, index) {
  console.log(index, item);
});
// 0 1
// 1 2
// 2 3

arr.forEach(item => console.log(item * 2));  // 2, 4, 6
```

---

## 27. for in and for of

- **for...in** – loops over **keys** (index for arrays, property names for objects).
- **for...of** – loops over **values** (array elements, string characters).

```javascript
let arr = ["a", "b", "c"];
for (let i in arr) {
  console.log(i);   // "0", "1", "2" (keys as strings)
}
for (let v of arr) {
  console.log(v);   // "a", "b", "c"
}

let obj = { x: 1, y: 2 };
for (let key in obj) {
  console.log(key, obj[key]);  // x 1, y 2
}
```

For arrays, **for...of** is usually what you want.

---

## 28. map Method

Creates a **new array** by calling a function on each item.
```javascript
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled);  // [2, 4, 6]

let names = ["alice", "bob"];
let caps = names.map(s => s.toUpperCase());
console.log(caps);  // ["ALICE", "BOB"]
```

---

## 29. filter Method

Creates a **new array** with only items that pass a test (callback returns truthy).
```javascript
let nums = [1, 2, 3, 4, 5];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 }
];
let adults = users.filter(u => u.age >= 18);
console.log(adults);  // [{ name: "Alice", age: 25 }]
```

---

## 30. reduce Method

Turns an array into **one value** (number, string, object, etc.) by repeatedly combining an accumulator with each item.
```javascript
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 10

let max = nums.reduce((acc, n) => (n > acc ? n : acc), nums[0]);
console.log(max);  // 4
```

**Signature:** `arr.reduce((accumulator, currentItem) => { ... }, initialValue)`

---

## 31. sort Method

Sorts the array **in place** (changes the original). Default sort is **by string**, so numbers need a compare function:
```javascript
let letters = ["c", "a", "b"];
letters.sort();
console.log(letters);  // ["a", "b", "c"]

let nums = [10, 2, 30];
nums.sort((a, b) => a - b);   // ascending
console.log(nums);  // [2, 10, 30]
nums.sort((a, b) => b - a);   // descending
console.log(nums);  // [30, 10, 2]
```

---

## 32. find Method

Returns the **first item** that passes the test (callback returns true). Otherwise **undefined**.
```javascript
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
let user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: "Bob" }

console.log([1, 2, 3].find(x => x > 5));  // undefined
```

---

## 33. every Method

Returns **true** only if the callback returns true for **every** item. Otherwise false.
```javascript
let nums = [2, 4, 6];
console.log(nums.every(n => n % 2 === 0));  // true

console.log([2, 3, 6].every(n => n % 2 === 0));  // false
```

---

## 34. some Method

Returns **true** if the callback returns true for **at least one** item. Otherwise false.
```javascript
let nums = [1, 3, 4];
console.log(nums.some(n => n % 2 === 0));  // true

console.log([1, 3, 5].some(n => n % 2 === 0));  // false
```

---

## 35. fill Method

Fills (part of) an array with a **fixed value**. Modifies the array.
```javascript
let arr = [1, 2, 3, 4];
arr.fill(0);
console.log(arr);  // [0, 0, 0, 0]

let arr2 = [1, 2, 3, 4];
arr2.fill(9, 1, 3);  // fill 9 from index 1 to 2 (end not included)
console.log(arr2);   // [1, 9, 9, 4]
```

---

## 36. splice Method

**Adds and/or removes** elements at a position. Modifies the array.

**splice(start, deleteCount, item1, item2, ...)**
```javascript
let arr = ["a", "b", "c", "d"];
arr.splice(2, 1);        // remove 1 item at index 2
console.log(arr);        // ["a", "b", "d"]

arr.splice(1, 0, "x");   // at index 1, delete 0, add "x"
console.log(arr);        // ["a", "x", "b", "d"]

arr.splice(2, 1, "y");   // at index 2, remove 1, add "y"
console.log(arr);        // ["a", "x", "y", "d"]
```

---

## 37. Iterables, Array-like Object

- **Iterable:** can be used with **for...of** (e.g. arrays, strings, Map, Set).
- **Array-like:** has **length** and numeric keys (e.g. `arguments`, some DOM lists) but might not have array methods.

```javascript
let s = "hi";
for (let c of s) console.log(c);  // "h", "i"

// Array-like → real array (to use .map, .filter, etc.)
function fn() {
  let args = Array.from(arguments);
  // or: let args = [...arguments];
}
```

**Array.from(arrayLike)** turns array-like (or iterable) into a real array.

---

## 38. What is the DOM?

**DOM** = Document Object Model. It’s the way the browser represents the HTML as a **tree of objects**. JavaScript can read and change this tree (add/remove elements, change text, change styles, react to events).

- **Document** = the whole page.
- **Elements** = tags (div, p, button, etc.) as objects with properties and methods.

---

## 39. getElementById

Returns **one element** with the given **id** (or null).
```html
<div id="header">Hello</div>
```
```javascript
let el = document.getElementById("header");
console.log(el.textContent);  // "Hello"
```

Only one element should have a given id on the page.

---

## 40. querySelector

Returns the **first** element that matches a **CSS selector** (class, id, tag, etc.).
```javascript
let first = document.querySelector(".card");   // first .card
let byId   = document.querySelector("#header");
let tag    = document.querySelector("p");
let nested = document.querySelector("div .card");
```

---

## 41. textContent and innerText

Both give you the **text** inside an element (and let you set it).

| Property     | Behavior |
|-------------|----------|
| **textContent** | All text, including hidden. Plain string. |
| **innerText**   | Only visible text; respects CSS (e.g. display:none). |

```javascript
let el = document.querySelector("p");
console.log(el.textContent);
el.textContent = "New text";   // set text (no HTML)
```

**Setting** with either replaces all child content with plain text (no HTML). For HTML, use **innerHTML** (see below).

---

## 42. Change the Styles of Elements

Use the **style** object. Properties are in **camelCase** (e.g. backgroundColor, not background-color).
```javascript
let box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "10px";
box.style.display = "none";
box.style.display = "block";
```

For many styles, adding/removing a **class** and defining the class in CSS is often better than setting many `.style` properties.

---

## 43. querySelectorAll and getElementsByClassName

- **querySelectorAll(selector)** – returns a **NodeList** of all elements matching the selector. You can **forEach** or convert to array.
- **getElementsByClassName(name)** – returns an **HTMLCollection** of elements with that class (live: updates when DOM changes).

```javascript
let cards = document.querySelectorAll(".card");
cards.forEach(el => console.log(el));

let items = document.getElementsByClassName("item");
// items is live; use Array.from(items) to get a normal array
```

---

## 44. Iterate Elements

After **querySelectorAll** or **getElementsByClassName** you have a list. Iterate with:

```javascript
let list = document.querySelectorAll(".item");

// forEach (NodeList has it)
list.forEach(el => {
  el.style.color = "red";
});

// for loop
for (let i = 0; i < list.length; i++) {
  list[i].classList.add("active");
}

// for...of
for (let el of list) {
  console.log(el.textContent);
}
```

---

## 45. innerHTML

Gets or sets the **HTML string** inside an element. Setting it **replaces** all children.
```javascript
let div = document.querySelector(".container");
console.log(div.innerHTML);   // e.g. "<p>Hi</p>"

div.innerHTML = "<p>New paragraph</p>";
div.innerHTML += "<span>More</span>";  // append (be careful with XSS)
```

**Warning:** Setting innerHTML with user input can cause **XSS**. Prefer **textContent** for plain text, or sanitize HTML.

---

## 46. DOM Tree

The page is a **tree**:
- **document** (root)
  - **html**
    - **head** (title, meta, link, script)
    - **body** (what you see)
      - **div**, **p**, **button**, etc.
        - text nodes, more elements, etc.

You move with:
- **parentElement**, **children**, **firstElementChild**, **lastElementChild**
- **nextElementSibling**, **previousElementSibling**

```javascript
let el = document.querySelector("p");
console.log(el.parentElement);
console.log(el.children);
console.log(el.nextElementSibling);
```

---

## 47. setTimeout

Runs a function **once** after a delay (in milliseconds).
```javascript
setTimeout(function () {
  console.log("After 2 seconds");
}, 2000);

setTimeout(() => console.log("After 1 second"), 1000);
```

**Clear** a timeout:
```javascript
let id = setTimeout(() => console.log("Hi"), 3000);
clearTimeout(id);  // cancels it
```

---

## 48. setInterval

Runs a function **repeatedly** at a given interval (in milliseconds).
```javascript
let id = setInterval(function () {
  console.log("Every second");
}, 1000);

// Stop after 5 seconds
setTimeout(() => clearInterval(id), 5000);
```

**Clear** with **clearInterval(id)** when you want to stop it.

---
