## 1. npm, npx create-react-app, and Node.js Environment

- **Node.js** – Lets you run JavaScript outside the browser. Install from [nodejs.org](https://nodejs.org). Comes with **npm** (Node Package Manager).
- **npm** – Installs and manages packages. Commands: `npm install`, `npm start`, `npm run build`, etc.
- **npx** – Runs a package without installing it globally. Often used to create a new app once.

**Create a new React app:**
```bash
npx create-react-app my-app
cd my-app
npm start
```

This creates a folder `my-app` with a ready-to-run React project and starts the dev server (usually at http://localhost:3000).

---

## 2. What is JSX, React.js, index file, and App.js?

- **React.js** – A JavaScript library for building UIs. You build the UI from **components** (reusable pieces) that use **state** and **props**.
- **JSX** – Syntax that looks like HTML inside JavaScript. React turns it into React elements. Use **className** instead of `class`, and **{}** for JavaScript expressions.
- **index.js / index.tsx** – Entry file. Renders the root component (usually `<App />`) into a DOM node (e.g. `root`).
- **App.js / App.jsx** – Default root component. You edit it to build your app and use other components.

**Example (App.js):**
```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}
```

---

## 3. Component Names Must Start with a Capital Letter

React treats **capitalized** tags as components and **lowercase** tags as HTML elements.

```jsx
// Component – React looks for a component named Button
<Button />

// HTML – browser element
<button></button>
```

So name your components with a capital: `UserCard`, `Header`, not `userCard`, `header`.

---

## 4. useState – 5 Scenarios and State Update

**useState** gives a component its own data that can change. When you update it, React re-renders.

**Basic:**
```jsx
const [count, setCount] = useState(0);
setCount(1);           // new value
setCount(c => c + 1);  // update based on previous (preferred when using previous value)
```

**5 common scenarios:**

1. **Number (e.g. counter):**
```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

2. **String (e.g. input):**
```jsx
const [name, setName] = useState("");
setName(e.target.value);
```

3. **Boolean (e.g. toggle, modal open/close):**
```jsx
const [isOpen, setIsOpen] = useState(false);
setIsOpen(true);
```

4. **Array (e.g. list of items):**
```jsx
const [items, setItems] = useState([]);
setItems([...items, newItem]);        // add
setItems(items.filter(i => i.id !== id));  // remove
setItems(items.map(i => i.id === id ? { ...i, name: "New" } : i));  // update
```

5. **Object (e.g. form or single entity):**
```jsx
const [user, setUser] = useState({ name: "", age: 0 });
setUser({ ...user, name: "Alice" });
```

**Rule:** Don’t mutate state. Replace with a new array/object (spread, map, filter) so React detects the change.

---

## 5. useEffect – With and Without Dependency Array

**useEffect** runs side effects (API calls, subscriptions, DOM) after render.

**Run once after first render (no dependency array):**
```jsx
useEffect(() => {
  console.log("Runs once on mount");
  return () => console.log("Cleanup on unmount");
}, []);  // empty array = run once
```

**Run on every render (no second argument):**
```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

**Run when a value changes (dependency array):**
```jsx
useEffect(() => {
  console.log("Runs when userId or page changes");
  fetchUser(userId, page);
}, [userId, page]);
```

**Cleanup:** Return a function from useEffect to run when the component unmounts or before the effect runs again (e.g. clear timer, cancel request).

---

## 6. Props – LHS and RHS

**Props** are inputs passed **from parent to child**. The parent sets them (right-hand side), the child receives them (left-hand side).

**Parent (RHS – what you pass):**
```jsx
<UserCard name="Alice" age={25} onEdit={handleEdit} />
```

**Child (LHS – what you receive):**
```jsx
function UserCard(props) {
  return (
    <div>
      {props.name}, {props.age}
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}
// Or destructure:
function UserCard({ name, age, onEdit }) {
  return <div>{name}, {age} <button onClick={onEdit}>Edit</button></div>;
}
```

**Rule:** Don’t change props inside the child. Treat them as read-only.

---

## 7. State Lifting – Parent to Child and Child to Parent

- **Parent → Child:** Pass data and callbacks as **props**.
- **Child → Parent:** Parent passes a **callback** (e.g. `onSave`); child calls it with data. Parent updates its state.

**Example – child notifies parent:**
```jsx
// Parent
function Parent() {
  const [name, setName] = useState("");
  const handleNameChange = (newName) => setName(newName);
  return <Child name={name} onNameChange={handleNameChange} />;
}

// Child
function Child({ name, onNameChange }) {
  return (
    <input
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
}
```

“Lifting state up” = keep state in a common parent and pass it down (and pass down setters or callbacks so children can update it).

---

## 8. map Using Index for Delete/Update

**Update by index:** Copy the array, change the item at that index, then set state.  
**Delete by index:** Filter out the item at that index.

```jsx
const [list, setList] = useState(["a", "b", "c"]);

// Update at index 1
const updateAt = (index, newValue) => {
  setList(list.map((item, i) => (i === index ? newValue : item)));
};

// Delete at index 1
const deleteAt = (index) => {
  setList(list.filter((_, i) => i !== index));
};
```

Prefer **id** over **index** when you add/remove/reorder items (see Keys section).

---

## 9. filter Using Index for Delete/Update

**Delete by index:** Keep all items whose index is not the target index.

```jsx
const deleteAtIndex = (index) => {
  setList(list.filter((_, i) => i !== index));
};
```

**“Update” by index:** Often done with map (replace item at index). Filter is used to remove, not to update in place.

---

## 10. findIndex

Returns the **index** of the first element that passes the test, or **-1**.

```jsx
const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const index = users.findIndex(u => u.id === 2);  // 1

// Use to update or delete in state
const updateUser = (id, newName) => {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return;
  const next = [...users];
  next[idx] = { ...next[idx], name: newName };
  setUsers(next);
};
```

---

## 11. find

Returns the **first item** that passes the test, or **undefined**.

```jsx
const user = users.find(u => u.id === 2);  // { id: 2, name: "Bob" }
```

Use **find** when you need the object; use **findIndex** when you need the position (e.g. for splice or replace in array state).

---

## 12. Routers and Passing Data Between Routes

Use **React Router** (e.g. `react-router-dom`). Define routes and pass data via **URL params**, **search params**, or **state**.

**Setup:**
```jsx
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/:id" element={<UserDetail />} />
    <Route path="/search" element={<Search />} />
  </Routes>
</BrowserRouter>
```

**Pass data:**

- **URL param:** `/user/123` → in component: `const { id } = useParams();`
- **Navigate with state:** `navigate("/user/123", { state: { name: "Alice" } });` → in target: `const location = useLocation(); location.state`
- **Query string:** `/search?q=react` → use `useSearchParams()` or parse `location.search`

---

## 13. axios and fetch

Both are used for **HTTP requests** (GET, POST, etc.).

**fetch (built-in):**
```jsx
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error(err));
}, []);
```

**axios (library – npm install axios):**
```jsx
import axios from "axios";

useEffect(() => {
  axios.get("https://api.example.com/users")
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
}, []);
```

axios gives you `res.data` directly and has interceptors, but fetch is built into the browser.

---

## 14. Material UI and Ant Design – Brief Introduction

Both are **React UI libraries** (buttons, inputs, tables, modals, etc.).

- **Material UI (MUI):** [mui.com](https://mui.com) – Material Design. Components: `Button`, `TextField`, `Card`, `Dialog`, etc.
- **Ant Design (antd):** [ant.design](https://ant.design) – Enterprise-style. Components: `Button`, `Input`, `Table`, `Modal`, etc.

You **import** components and use them instead of plain HTML for a consistent look and behavior. Your React patterns (state, props, hooks) stay the same.

---

## 15. Redux – Brief Introduction

**Redux** is a state management library. You keep app state in a single **store**. Components **read** state with **useSelector** and **dispatch actions** with **useDispatch**; a **reducer** updates the store.

**When to use:** When state is shared by many components or when prop drilling becomes messy. For small apps, **useState** + **Context** is often enough.

**Core ideas:** Store, actions, reducer, dispatch. React-Redux provides **Provider**, **useSelector**, **useDispatch**.

---

## 16. Class Components

Before hooks, components were **classes** with **render()** and lifecycle methods (**componentDidMount**, **componentDidUpdate**, etc.). New code is usually written as **function components** with hooks. You may still see class components in older projects.

**Example:**
```jsx
class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
```

---

## 17. Debugging – Console and Elements in Chrome

- **F12** or **Right-click → Inspect** opens DevTools.
- **Console tab:** `console.log()`, errors, warnings. Use it to inspect state and API responses.
- **Elements tab:** Inspect DOM, see which component produced which node (with React DevTools), edit styles temporarily.

**React DevTools** (browser extension): Lets you inspect component tree, props, and state. Very useful for debugging React.

---

## 18. Conditionally Show a div Using useState

Use a **boolean state** to decide whether to render.

```jsx
const [showBox, setShowBox] = useState(false);

return (
  <div>
    <button onClick={() => setShowBox(!showBox)}>Toggle</button>
    {showBox && <div>I am visible when showBox is true</div>}
  </div>
);
```

---

## 19. Conditional Showing Using Ternary Operator

Use **ternary** when you want one thing **or** another (e.g. two different UIs).

```jsx
return (
  <div>
    {isLoggedIn ? (
      <p>Welcome, {userName}</p>
    ) : (
      <button>Login</button>
    )}
  </div>
);
```

For “show or show nothing,” **condition && &lt;JSX&gt;** is common. For “A or B,” **condition ? &lt;A&gt; : &lt;B&gt;** is clear.

---

## 20. ref (useRef)

**useRef** gives a mutable object that persists across renders. Common uses: reference a DOM element, or hold a value that doesn’t trigger re-render.

**DOM ref:**
```jsx
const inputRef = useRef(null);

const focusInput = () => inputRef.current.focus();

return (
  <>
    <input ref={inputRef} />
    <button onClick={focusInput}>Focus input</button>
  </>
);
```

**Mutable value (no re-render):**
```jsx
const countRef = useRef(0);
countRef.current += 1;  // doesn’t re-render
```

---

## 21. Assigning JSX to a Constant

You can store JSX in a variable and use it in return.

```jsx
function App() {
  const title = <h1>Hello</h1>;
  const list = (
    <ul>
      <li>A</li>
      <li>B</li>
    </ul>
  );
  return (
    <div>
      {title}
      {list}
    </div>
  );
}
```

Useful when building JSX in steps or when returning different JSX from branches.

---

## 22. How useEffect Runs on Dependency Changes

- **No dependency array:** Runs after **every** render.
- **Empty array []:** Runs **once** after first render (mount).
- **Non-empty array [a, b]::** Runs after first render and again **whenever a or b changes** (by reference for objects/arrays).

React compares dependencies with **Object.is**. So use primitive values or stable references in the dependency array; avoid creating new objects/arrays inside render if they are dependencies.

---

## 23. Form onSubmit

Handle form submit with **onSubmit** and **e.preventDefault()** so the page doesn’t reload.

```jsx
const [name, setName] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted:", name);
};

return (
  <form onSubmit={handleSubmit}>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <button type="submit">Submit</button>
  </form>
);
```

Controlled inputs: **value** comes from state, **onChange** updates state.

---

## 24. Router, history.push / navigate, and Passing Data Between Routes

In **React Router v6** you use **useNavigate** (no longer `history.push`).

```jsx
const navigate = useNavigate();

// Go to a path
navigate("/users");

// Go with state (receive in target with useLocation().state)
navigate("/user/1", { state: { from: "list" } });

// Replace current entry (no back)
navigate("/login", { replace: true });
```

In the target route: `const location = useLocation(); const data = location.state;`

---

## 25. Don’t Change Props – Only Update State

**Props are read-only.** The parent owns them. The child should **not** do `props.name = "x"` or mutate props. To change something, the parent should pass a callback and update its **state**; the child calls the callback (e.g. `onNameChange("x")`). So: **parent state** changes, **new props** flow down to the child.

---

## 26. Same Component in Multiple Places – Missing Optional Props

When one component is used in several places and **some props are not always passed**, make those props **optional** and give defaults.

```jsx
function Card({ title, subtitle = "Default subtitle", onClick }) {
  return (
    <div onClick={onClick}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

// Usage
<Card title="A" />
<Card title="B" subtitle="Optional" onClick={handleClick} />
```

Use **default parameters** (`subtitle = "..."`) or check `if (prop != null)` before using.

---

## 27. CRUD Operations

**CRUD** = Create, Read, Update, Delete. In React you usually:

- **Create:** Form submit → call API (POST) → update state (add new item to list).
- **Read:** useEffect → fetch (GET) → set state; display list or detail.
- **Update:** Form or inline edit → API (PUT/PATCH) → update that item in state (e.g. with map).
- **Delete:** Confirm → API (DELETE) → remove from state (e.g. with filter).

State holds the list (or current entity); API calls and then state updates keep the UI in sync.

---

## 28. Keys

When you **map** over an array to render a list, each top-level element should have a **unique key** (usually an id). Keys help React know which item changed/added/removed so it can update the DOM correctly.

```jsx
{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}
```

**Don’t use index as key** if the list can be reordered, filtered, or items inserted/removed. Prefer a stable **id** from your data.

---

## 29. Lifecycle Methods – Functional vs Class

**Class components:** Lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

**Function components:** Use **useEffect** to match that behavior.

| Class lifecycle        | useEffect equivalent                    |
|------------------------|-----------------------------------------|
| componentDidMount      | `useEffect(() => { ... }, []);`         |
| componentDidUpdate     | `useEffect(() => { ... }, [dep1, dep2]);` |
| componentWillUnmount   | Return cleanup from useEffect: `return () => { ... };` |

---

## 30. Context API

**Context** lets you pass data **through the tree** without passing props at every level. Good for theme, auth, locale, etc.

**Create and provide:**
```jsx
const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}
```

**Consume in any child:**
```jsx
function Button() {
  const { theme } = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

---

## 31. Infinite Loop Cases in State Update

An infinite loop happens when an effect or render **always** triggers a state update, which triggers another render, and so on.

**Common causes:**

1. **useEffect with no deps, updating state:** Runs every render → setState → render → effect again. Fix: add proper dependencies or run only once with `[]`.
2. **Object/array in dependency array created in render:** New reference every time → effect runs every time → setState → loop. Fix: use primitives, or useMemo/useCallback for stable references.
3. **setState in render (no useEffect, no event):** Every render calls setState → re-render → setState again. Fix: only update state in events or inside useEffect.

---

## 32. useSelector (React-Redux)

**useSelector** reads data from the Redux store. The component re-renders when the selected value changes.

```jsx
import { useSelector } from "react-redux";

const count = useSelector(state => state.counter.count);
const user = useSelector(state => state.user);
```

Keep the selector simple and return only what this component needs.

---

## 33. useDispatch (React-Redux)

**useDispatch** gives you the store’s **dispatch** function so you can send **actions**.

```jsx
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const increment = () => dispatch({ type: "INCREMENT" });
const addUser = (user) => dispatch({ type: "ADD_USER", payload: user });
```

The reducer handles the action and updates the store; components using **useSelector** re-render.

---

## 34. useCallback and useMemo

- **useCallback:** Returns a **memoized function** so the same function reference is kept between renders unless dependencies change. Useful when passing callbacks to optimized children.
```jsx
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

- **useMemo:** Returns a **memoized value** (result of a computation). Recomputes only when dependencies change.
```jsx
const sortedList = useMemo(() => {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}, [list]);
```

Use when you have expensive work or when you need stable references for dependency arrays (e.g. useEffect, React.memo).

---

## 35. Counter Increment

Simple pattern: one number state, buttons that call setState with previous value.

```jsx
const [count, setCount] = useState(0);

return (
  <div>
    <span>{count}</span>
    <button onClick={() => setCount(c => c + 1)}>+</button>
    <button onClick={() => setCount(c => c - 1)}>-</button>
  </div>
);
```

Using **c => c + 1** avoids stale closure if multiple updates happen quickly.

---

## 36. Dropdown Changing State (Conditional)

Use a **select** (or custom dropdown) and update state in **onChange**. Use that state to show/hide or change other UI.

```jsx
const [status, setStatus] = useState("pending");

return (
  <>
    <select value={status} onChange={(e) => setStatus(e.target.value)}>
      <option value="pending">Pending</option>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
    </select>
    {status === "approved" && <p>Approved!</p>}
    {status === "rejected" && <p>Rejected.</p>}
  </>
);
```

---

## 37. Multiple Classes Using Template Literal

Build **className** from several parts with a template string.

```jsx
const base = "btn";
const type = "primary";
const size = "lg";
const className = `${base} ${base}--${type} ${base}--${size}`;
return <button className={className}>Click</button>;
// e.g. "btn btn--primary btn--lg"
```

---

## 38. Adding Dynamic Classes

Use an array or template string and join, or a helper like **classnames** / **clsx**. Only include classes when conditions are true.

```jsx
const [active, setActive] = useState(false);
const [loading, setLoading] = useState(false);

const className = [
  "card",
  active && "card--active",
  loading && "card--loading"
].filter(Boolean).join(" ");

return <div className={className}>...</div>;
```

---

## 39. Adding Dynamic CSS (style) to a div Using a Condition

Use the **style** prop with an object. Use a condition to set properties or the whole object.

```jsx
const [highlight, setHighlight] = useState(false);

const style = {
  padding: "10px",
  background: highlight ? "yellow" : "transparent",
  border: highlight ? "2px solid orange" : "none"
};

return <div style={style}>Content</div>;
```

---

## 40. localStorage

**localStorage** keeps string data in the browser across refreshes and tabs (same origin). Use for preferences, simple cache, or draft data.

```jsx
// Save
localStorage.setItem("theme", "dark");
localStorage.setItem("user", JSON.stringify({ name: "Alice" }));

// Read
const theme = localStorage.getItem("theme");
const user = JSON.parse(localStorage.getItem("user") || "null");

// Remove
localStorage.removeItem("theme");
```

Sync React state with localStorage in **useEffect** (read on mount, write when state changes) if you want the UI to reflect stored values.

---

## 41. Application Tab and Network Tab (Chrome DevTools)

- **Application tab:** Inspect **localStorage**, **sessionStorage**, cookies, cache. Useful to see what’s stored and clear it while debugging.
- **Network tab:** See every HTTP request (URL, method, status, headers, response). Use it to debug API calls (axios/fetch), check payloads and responses.

---

## 42. uuid Library

**uuid** generates unique IDs (e.g. for new list items before sending to API or for React keys when you have no server id).

```bash
npm install uuid
```

```jsx
import { v4 as uuidv4 } from "uuid";

const newItem = { id: uuidv4(), name: "New task" };
setItems([...items, newItem]);
```

---

## 43. moment.js Library

**moment.js** (or **day.js** / **date-fns**) formats and parses dates.

```jsx
import moment from "moment";

moment().format("YYYY-MM-DD");        // "2025-02-14"
moment(date).format("DD MMM YYYY");   // "14 Feb 2025"
moment(date).fromNow();              // "2 hours ago"
```

Note: Moment is large; for new projects **day.js** or **date-fns** are often preferred.

---

## 44. Arrow Function vs Regular Function and this in React Components

- **Arrow function:** Does not have its own **this**. It uses **this** from the surrounding scope. Handy in callbacks so you don’t need `.bind(this)`.
- **Regular function:** Has its own **this**. In event handlers (e.g. `onClick={this.handleClick}`) **this** can be undefined unless you bind or use an arrow property.

In **function components** there is no **this**; you use props and state. So the issue mainly appears in **class components** or when passing methods as callbacks.

```jsx
// Class – arrow avoids binding
class Old extends React.Component {
  handleClick = () => {
    console.log(this);  // component instance
  };
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

---

## 45. Git, Ticket, Bitbucket, Source Tree, and Terminal

- **Git** – Version control. Tracks file changes, branches, and history. You **commit** changes, **push** to a remote, **pull** updates, **branch** for features.
- **Ticket** – A task/issue in a system (Jira, GitHub Issues, etc.). Often tied to a branch and PR (e.g. “feature/TICKET-123-add-login”).
- **Bitbucket** – A Git hosting service (like GitHub/GitLab). You push/pull repos, open PRs, manage permissions.
- **Source Tree** – A GUI for Git (windows/mac). You can commit, branch, merge, push, pull without typing all commands.
- **Terminal** – Command-line interface. You run `git`, `npm`, `npx`, and other commands (e.g. `git status`, `git add .`, `git commit -m "message"`, `git push`).

---

