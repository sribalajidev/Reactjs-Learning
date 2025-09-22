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

## **Summary**

- JSX allows HTML-like syntax in JavaScript.
- Use ```{}``` to embed JavaScript expressions inside JSX.
- Lists, conditional rendering, fragments, className, self-closing tags, and camelCase attributes are essential JSX concepts.
- Events like ```onClick``` can be attached to elements to make UI interactive.

---