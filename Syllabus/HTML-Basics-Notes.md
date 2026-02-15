# HTML Basics – Simple & Easy Notes

Simple notes with clear examples for learning HTML. Use these as a quick reference.

---

## 1. Document structure: html, head, body, script

Every HTML page has this basic shape:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <!-- Meta, CSS, etc. -->
  </head>
  <body>
    <!-- What user sees -->
    <h1>Hello</h1>
    <script src="app.js"></script>
  </body>
</html>
```

| Tag      | Role |
|----------|------|
| **&lt;html&gt;** | Wraps the whole page. |
| **&lt;head&gt;** | Not visible. Contains title, meta, links to CSS, etc. |
| **&lt;body&gt;** | Visible content: text, images, buttons, etc. |
| **&lt;script&gt;** | Loads or writes JavaScript. Can be in head or body (often at end of body). |

**Example – script in body:**
```html
<body>
  <p>Content here</p>
  <script src="main.js"></script>
</body>
```

---

## 2. Headings: h1, h2, … h6

Used for **titles/sections**, not for making text big. **h1** = main title (usually one per page), **h2** = section, **h3** = sub-section, etc.

```html
<h1>Main Title</h1>
<h2>Section 1</h2>
<h3>Sub-section</h3>
```

**h1 vs other tags:**  
- **h1** = “this is the main heading” (semantic + big by default).  
- **p**, **div**, **span** = not headings; use them for normal text or layout.

---

## 3. div and span

- **&lt;div&gt;** = block box. Used to group other elements (sections, cards, layout). No meaning by itself.
- **&lt;span&gt;** = inline. Used to style or mark a part of text inside a line.

```html
<div>
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>

<p>This word is <span class="highlight">highlighted</span>.</p>
```

|        | div | span |
|--------|-----|------|
| Display | Block (full width, new line) | Inline (same line as text) |
| Use    | Group blocks, layout | Style part of a line |

---

## 4. p, b (and strong), text

- **&lt;p&gt;** = paragraph. Block of text, separate from other paragraphs.
- **&lt;b&gt;** = bold (visual only). **&lt;strong&gt;** = bold + “important” for screen readers. Prefer **strong** for important text.

```html
<p>First paragraph.</p>
<p>Second paragraph with <b>bold</b> and <strong>important</strong>.</p>
```

---

## 5. Lists: ol and li, ul and li

- **&lt;ol&gt;** = ordered list (1, 2, 3…).
- **&lt;ul&gt;** = unordered list (bullets).
- **&lt;li&gt;** = one item inside the list.

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```

**Rule:** Only **&lt;li&gt;** should be direct children of **&lt;ol&gt;** or **&lt;ul&gt;** (no div between ol/ul and li).

---

## 6. title and textarea

- **&lt;title&gt;** = text in the browser tab / bookmark. Goes inside **&lt;head&gt;**.
- **&lt;textarea&gt;** = multi-line text input (comments, descriptions).

```html
<head>
  <title>My Page Name</title>
</head>

<body>
  <label>Comments:</label>
  <textarea rows="4" cols="50" placeholder="Write here..."></textarea>
</body>
```

---

## 7. a (links) vs h1 (headings)

| Tag | Purpose |
|-----|--------|
| **&lt;a&gt;** | Link. User clicks and goes to another page or place. Use **href**. |
| **&lt;h1&gt;** | Main heading. Not clickable (unless you put a link inside it). |

```html
<h1>Welcome to my site</h1>
<a href="https://example.com">Go to Example</a>
<a href="about.html">About page</a>
<a href="#section2">Jump to Section 2</a>
```

**Link + heading together:**
```html
<h1><a href="/">Site Name</a></h1>
```

---

## 8. img (images)

Shows an image. Use **src** (path or URL) and **alt** (description for accessibility and when image fails to load).

```html
<img src="photo.jpg" alt="A sunny beach" />
<img src="https://example.com/image.png" alt="Logo" width="200" />
```

**Good habit:** Always give a short, clear **alt** text.

---

## 9. table (tables)

Used for tabular data (rows and columns).

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

| Tag   | Role |
|-------|------|
| **&lt;table&gt;** | Wraps the whole table. |
| **&lt;thead&gt;** | Header row(s). |
| **&lt;tbody&gt;** | Data rows. |
| **&lt;tr&gt;** | One row. |
| **&lt;th&gt;** | Header cell (bold by default). |
| **&lt;td&gt;** | Data cell. |

---

## 10. iframe

Embeds another page or video inside your page (e.g. map, YouTube).

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560"
  height="315"
  title="Video player"
></iframe>
```

**Note:** Always set **title** for accessibility. Some sites don’t allow embedding (X-Frame-Options).

---

## 11. input and button

- **&lt;input&gt;** = single-line input. Type is set with **type** (text, number, email, password, checkbox, radio, etc.).
- **&lt;button&gt;** = clickable button. Use **type="submit"**, **type="button"**, or **type="reset"**.

```html
<input type="text" placeholder="Your name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<input type="number" min="0" max="100" />
<input type="checkbox" id="agree" /> <label for="agree">I agree</label>
<input type="radio" name="size" value="S" /> Small
<input type="radio" name="size" value="M" /> Medium

<button type="button">Click me</button>
<button type="submit">Submit form</button>
```

**Common input types:** text, email, password, number, checkbox, radio, date, file.

---

## Quick recap: tag roles

| Tag       | Role |
|-----------|------|
| **html**  | Root of the page. |
| **head**  | Invisible: title, meta, CSS, scripts. |
| **body**  | Visible content. |
| **script**| Load or run JavaScript. |
| **h1–h6** | Headings (h1 = main). |
| **div**   | Block container (layout, grouping). |
| **span**  | Inline container (style part of text). |
| **p**     | Paragraph. |
| **b / strong** | Bold. |
| **ol, ul, li** | Ordered / unordered lists. |
| **title** | Browser tab text (in head). |
| **textarea** | Multi-line text input. |
| **a**     | Link (href). |
| **img**   | Image (src, alt). |
| **table, thead, tbody, tr, th, td** | Table. |
| **iframe**| Embed another page/video. |
| **input** | Single-line or special input (type). |
| **button**| Button (type=button/submit/reset). |

---

## 12. Ant Design (antd) – brief intro

**Ant Design** is a React UI library. You use **components** instead of plain HTML tags to get consistent, ready-made UI (buttons, forms, tables, modals, etc.).

**Install:**
```bash
npm install antd
```

**Example:**
```jsx
import { Button, Input, Table } from 'antd';

function App() {
  return (
    <>
      <Input placeholder="Name" />
      <Button type="primary">Submit</Button>
      <Table dataSource={data} columns={columns} />
    </>
  );
}
```

**You still use:** div, span, h1, p, etc. for layout and text. Ant Design adds components like **Button**, **Input**, **Table**, **Modal**, **Form**, **Select**, **DatePicker**, and many more. You style them via props and themes, not by writing raw HTML/CSS for each.

---

## 13. Material UI (MUI) – brief intro

**Material UI** is another React UI library, based on Google’s Material Design. Same idea: use components for buttons, inputs, cards, dialogs, etc.

**Install:**
```bash
npm install @mui/material @emotion/react @emotion/styled
```

**Example:**
```jsx
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <>
      <TextField label="Name" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </>
  );
}
```

**You still use:** div, span, h1, p for structure. MUI gives you **Button**, **TextField**, **Card**, **Dialog**, **AppBar**, **Grid**, etc. Styling is done via **sx** prop, **theme**, or CSS.

---

## Ant Design vs Material UI (very short)

|        | Ant Design | Material UI |
|--------|------------|-------------|
| Style  | Enterprise / neutral | Material Design (Google look) |
| Usage  | Buttons, Form, Table, Modal, etc. | Buttons, TextField, Card, Dialog, etc. |
| In your app | Import from `antd` | Import from `@mui/material` |

Both are **component libraries**: you use their tags (e.g. `<Button>`) instead of plain `<button>` to get consistent design and behavior. Your base HTML (div, p, span, h1, a, img, etc.) stays the same; these libraries sit on top for UI pieces.

---

Use this file as a cheat sheet next to your HTML/React work. Try editing one tag at a time in a small **.html** or React file to see what each does.
