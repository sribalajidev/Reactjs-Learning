# 2. JSX

This folder contains a complete hands-on guide to **JSX (JavaScript XML)**, the core syntax used in React to define UI elements.  
This guide includes **step-by-step instructions, commands, working code, and detailed explanations**.

---

## **Learning Objectives**
By the end of this POC, you will be able to:

1. Understand what JSX is and why React uses it.  
2. Embed JavaScript expressions inside JSX.  
3. Render dynamic lists and use conditional rendering.  
4. Use JSX best practices: fragments, className, self-closing tags, and camelCase attributes.  
5. Attach event handlers to JSX elements.

---

## **Understanding JSX**

- JSX stands for JavaScript XML.
- It allows you to write HTML-like syntax inside JavaScript, which React transforms into ```React.createElement()``` calls.
- JSX is not a string or HTML; it is syntactic sugar for React function calls.

---

### Complete JSX POC Example is added in ```App.jsx``` file.

### Explanation of JSX Concepts in this POC

1. Variables and expressions:
    - ```name``` and year show how to use JS variables.
    - ```{2 + 3}``` evaluates inline JavaScript expressions.
2. Conditional rendering:
    - ```{isLoggedIn ? <p>Welcome back</p> : <p>Please log in</p>}``` dynamically changes the UI.
3. Rendering lists:
    - ```fruits.map()``` iterates over an array to render ```<li>``` elements.
    - ```key``` prop ensures React can track each item efficiently.
4. Fragments:
    - ```<>...</>``` allows multiple elements without adding extra DOM nodes.
5. className:
    - ```<img className="logo" />``` instead of ```class="logo"```.
6. Self-closing tags:
    - ```<img />```, ```<input />```, ```<br />```, etc.
7. CamelCase attributes & events:
    - React uses camelCase for all events: ```onClick={handleClick}```.
8.Event handling:
    - ```handleClick``` demonstrates attaching a JavaScript function to a JSX element.

---

## Important Notes About `import React from "react"`

In older versions of React (before React 17), it was necessary to import React at the top of every JSX file:

```javascript
import React from "react";
```

- JSX was transpiled into React.createElement() calls under the hood.
- Without importing React, the JSX code would throw an error.

With React 17 and later, and modern tools like Vite, Create React App (CRA), or Next.js:
- You do not need to import React in every JSX file.
- JSX is automatically transformed without requiring React in scope.

**Example:**
```javascript
// Works fine in React 17+ without importing React
const Button = ({ label }) => <button>{label}</button>;
```

Editors like VS Code may show `import React from "react"` as grayed out or unused, which is normal.

**Best Practices Today**
- If using React 17+, you can safely remove `import React from "react"` from JSX files.
- Only keep it if:
    1. You are using React 16 or lower, or
    2. Your build setup specifically requires it.

---

## **Summary**

- JSX allows HTML-like syntax in JavaScript.
- Use ```{}``` to embed JavaScript expressions inside JSX.
- Lists, conditional rendering, fragments, className, self-closing tags, and camelCase attributes are essential JSX concepts.
- Events like ```onClick``` can be attached to elements to make UI interactive.

---