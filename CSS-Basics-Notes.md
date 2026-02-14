# CSS Basics – Simple & Easy Notes

Simple notes with clear examples for learning CSS. Use these as a quick reference.

---

## 1. class vs className

- **In HTML:** you use `class` to give an element a CSS class.
- **In React/JSX:** you must use `className` instead of `class`, because `class` is a reserved word in JavaScript.

**HTML:**
```html
<div class="card">Hello</div>
```

**React (JSX):**
```jsx
<div className="card">Hello</div>
```

**CSS (same in both):**
```css
.card {
  padding: 10px;
  background: #f0f0f0;
}
```

---

## 2. color and background

- **color** = text color  
- **background** (or **background-color**) = area behind the content

**Example:**
```css
.box {
  color: white;              /* text color */
  background-color: blue;    /* solid color */
}

.another {
  color: #333;
  background: lightgray;     /* same as background-color here */
}
```

**Common values:**
- Names: `red`, `blue`, `white`
- Hex: `#ff0000`, `#fff`
- RGB: `rgb(255, 0, 0)`

---

## 3. display: inline, inline-block, block

How the element sits in the layout and how much width it takes.

| Type          | Behavior |
|---------------|----------|
| **inline**    | Stays in the same line as text. Width/height don’t apply. |
| **block**     | Takes full width, next element goes to new line. |
| **inline-block** | Inline (sits in a line) but you can set width, height, margin, padding. |

**Example:**
```css
span.inline-demo {
  display: inline;      /* stays in line, no width/height */
}

div.block-demo {
  display: block;       /* full width, new line */
}

span.inline-block-demo {
  display: inline-block;
  width: 100px;
  height: 30px;
  background: lightblue;
}
```

**HTML:**
```html
<p>Text <span class="inline-demo">inline</span> here.</p>
<div class="block-demo">Block: full width</div>
<span class="inline-block-demo">Like a button</span>
```

---

## 4. CSS Selectors

Ways to “select” which elements get the style.

| Selector   | Meaning | Example |
|------------|---------|--------|
| **element** | All elements of that tag | `p { }` → all `<p>` |
| **.class** | All elements with that class | `.card { }` → class="card" |
| **#id**    | The one element with that id | `#header { }` → id="header" |
| **selector selector** | Inside another | `div p { }` → `<p>` inside `<div>` |
| **selector, selector** | Multiple at once | `h1, h2 { }` → both h1 and h2 |

**Example:**
```css
p { color: black; }
.highlight { background: yellow; }
#main-title { font-size: 24px; }
.card p { color: gray; }      /* p inside .card */
h1, h2 { font-family: Arial; }
```

---

## 5. margin and padding

- **margin** = space **outside** the element (pushes other elements away).
- **padding** = space **inside** the element (between border and content).

```
  margin (outside)
  ┌─────────────────────────┐
  │  padding (inside)        │
  │  ┌───────────────────┐  │
  │  │     CONTENT       │  │
  │  └───────────────────┘  │
  └─────────────────────────┘
```

**Example:**
```css
.box {
  margin: 20px;        /* all sides */
  padding: 10px;

  /* Or one by one: top right bottom left */
  margin: 10px 20px 10px 20px;
  padding: 5px 10px 5px 10px;
}
```

**Short form:**  
`margin: 10px 20px;` → top/bottom = 10px, left/right = 20px.

---

## 6. position

Where the element is placed in the page.

| Value      | Meaning |
|-----------|---------|
| **static** | Normal flow (default). |
| **relative** | Place relative to its normal position. You use `top`, `left`, etc. to nudge it. |
| **absolute** | Removed from flow; positioned relative to nearest positioned ancestor (or body). |
| **fixed**  | Stays in same place on screen when you scroll. |
| **sticky** | Acts like relative until you scroll; then “sticks” like fixed. |

**Example:**
```css
.relative-box {
  position: relative;
  top: 10px;
  left: 20px;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
}
```

---

## 7. Flexbox (display: flex)

Puts children in a row or column and lets you align and space them easily.

**Example:**
```css
.flex-container {
  display: flex;
  flex-direction: row;     /* row | column */
  justify-content: center;  /* main axis: start | center | end | space-between */
  align-items: center;      /* cross axis: start | center | end */
  gap: 10px;
}
```

**Quick meanings:**
- **justify-content** → align along the main direction (row = horizontal).
- **align-items** → align perpendicular (row = vertical).
- **gap** → space between items.

---

## 8. Grid (display: grid)

Layout in rows and columns.

**Example:**
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
  grid-template-rows: 50px 100px;
  gap: 10px;
}
```

**1fr** = one fraction of available space.  
`1fr 2fr` = second column is twice as wide as the first.

---

## 9. float

Makes an element sit to the left or right; text/content can wrap around it. Older layout method; flex/grid are preferred for full layouts.

**Example:**
```css
img {
  float: left;
  margin-right: 10px;
}
```

**Clear float** so next content doesn’t wrap:
```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

---

## 10. Media queries and screen

Change styles based on screen size (e.g. mobile vs desktop).

**Example:**
```css
/* Default (mobile-first) */
.sidebar { display: none; }

/* Tablet and up */
@media screen and (min-width: 768px) {
  .sidebar { display: block; }
}

/* Desktop */
@media screen and (min-width: 1024px) {
  .container { max-width: 1200px; }
}
```

- **min-width** = “when width is at least …”
- **max-width** = “when width is at most …”
- **screen** = only for screen (not print).

---

## 11. CSS Box Model

Every element is a box made of:

1. **Content** – text/image inside  
2. **Padding** – space inside, around content  
3. **Border** – line around padding  
4. **Margin** – space outside the border  

**Total width** = width + padding-left + padding-right + border-left + border-right (margin is not part of the element’s size).

**box-sizing:**
- **content-box (default):** `width` = only content; padding and border add to it.
- **border-box:** `width` = content + padding + border (often easier to use).

```css
* {
  box-sizing: border-box;
}
```

---

## 12. z-index

Controls stacking order when elements overlap. Bigger number = on top.

**Example:**
```css
.back { z-index: 1; }
.front { z-index: 10; }
.modal { z-index: 1000; }
```

**Note:** Only works on **positioned** elements (`position` other than `static`).

---

## 13. Negative margin

Moves the element in the opposite direction (can overlap or pull things closer).

**Example:**
```css
.pull-up {
  margin-top: -20px;   /* moves element 20px up */
}
```

Use sparingly; can make layout hard to follow.

---

## 14. !important

Forces a rule to win over other rules. Use only when really needed (e.g. overriding a library).

**Example:**
```css
.text {
  color: red !important;
}
```

Too much `!important` makes CSS hard to maintain.

---

## 15. id vs class

|       | id | class |
|-------|----|--------|
| **Use** | One element per page | Many elements can share |
| **In HTML** | `id="header"` | `class="card"` |
| **In CSS** | `#header { }` | `.card { }` |

**Rule of thumb:** Prefer **class** for styling. Use **id** for one-off elements or for JavaScript hooks.

---

## 16. border

Line around the element.

**Example:**
```css
.box {
  border: 2px solid black;

  /* Or separately: */
  border-width: 2px;
  border-style: solid;
  border-color: black;

  /* One side */
  border-bottom: 1px solid gray;
}
```

**Common styles:** `solid`, `dashed`, `dotted`, `none`.

---

## 17. width and height

Set size of the content area (with `box-sizing: border-box`, width/height include padding and border).

**Example:**
```css
.box {
  width: 200px;
  height: 100px;
}

.percent {
  width: 50%;   /* half of parent */
}
```

---

## 18. overflow

What happens when content is bigger than the element’s size.

| Value    | Effect |
|----------|--------|
| **visible** | Content can spill out (default). |
| **hidden**  | Extra content is cut off. |
| **scroll**  | Always show scrollbars. |
| **auto**    | Scrollbars only when needed. |

**Example:**
```css
.card {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```

---

## 19. Alignment

**Text:**
```css
p { text-align: center; }   /* left | center | right */
```

**Flex:**
```css
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**Grid:**
```css
.grid {
  display: grid;
  place-items: center;   /* center both directions */
}
```

---

## 20. min-width and max-width

Limit how small or big an element can get.

**Example:**
```css
.responsive-box {
  width: 100%;
  min-width: 200px;   /* never smaller than 200px */
  max-width: 800px;   /* never wider than 800px */
}
```

Same idea: **min-height**, **max-height**.

---

## 21. ::before and ::after (pseudo-elements)

Add fake “elements” before or after the content (often used for icons, lines, or decoration).

**Example:**
```css
.quote::before {
  content: """;
  font-size: 40px;
  color: gray;
}

.quote::after {
  content: """ ;
  font-size: 40px;
  color: gray;
}

/* Decorative line after title */
h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: blue;
}
```

**Note:** You must set **content** (even `content: ""`) for ::before and ::after to show.

---

## 22. :hover (pseudo-class)

Style when the user hovers the mouse over the element.

**Example:**
```css
.button {
  background: blue;
  color: white;
}

.button:hover {
  background: darkblue;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
```

**Other useful pseudo-classes:** `:focus`, `:active`, `:first-child`, `:last-child`.

---

## Quick reference summary

| Topic        | Key idea |
|-------------|----------|
| class / className | HTML: `class` → React: `className` |
| color / background | Text color vs fill behind content |
| inline / block / inline-block | How element flows and respects width/height |
| Selectors   | Tag, .class, #id, space (nested), comma (multiple) |
| margin / padding | Outside vs inside space |
| position    | static, relative, absolute, fixed, sticky |
| flex        | Row/column layout, justify, align, gap |
| grid        | Rows and columns, fr, gap |
| float       | Left/right, content wraps; clear when needed |
| @media      | Different styles by screen width |
| Box model   | Content → padding → border → margin; box-sizing |
| z-index     | Stacking order (positioned elements) |
| Negative margin | Move element opposite direction |
| !important  | Override other rules (use rarely) |
| id / class  | One vs many; prefer class for CSS |
| border      | width, style, color |
| width/height | Size; use with overflow if content can overflow |
| overflow    | visible, hidden, scroll, auto |
| min/max width | Limit size range |
| ::before / ::after | Extra content; need `content` |
| :hover      | Style on mouse over |

Use this file as a cheat sheet while you code. Try changing one thing at a time in a small HTML/CSS or React file to see the effect.
