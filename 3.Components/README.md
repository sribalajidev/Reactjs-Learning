# 3. Components

In ReactJS, **components** are the building blocks of the user interface.  
They allow you to split the UI into **reusable, independent pieces**, making development easier, organized, and scalable.

---

## **What is a Component?**

A component is a **self-contained piece of UI** that can be reused multiple times in a React application.  
It can accept inputs (called **props**) and maintain its own **state** to control dynamic behavior.

**Key characteristics:**
- Reusable
- Modular
- Easy to test
- Maintains its own logic and presentation

---

## **Types of Components in React**

React has **two main types of components**:

1. **Functional Components**
   - Written as **JavaScript functions**.  
   - Return JSX to render UI.  
   - Stateless by default, but can use **hooks** (`useState`, `useEffect`, etc.) for state and lifecycle features.  
   - **Preferred in modern React** for simplicity and readability.

2. **Class Components**
   - Written as **ES6 classes** extending `React.Component`.  
   - Can have **state** and **lifecycle methods** (`componentDidMount`, `componentDidUpdate`, etc.).  
   - Access props using `this.props`.  
   - Used less frequently today but still important for understanding legacy React code.

> Detailed examples of each type are provided in their respective subfolders:  
> - `Functional-Component/`  
> - `Class-Component/`  

---

## **Benefits of Using Components**

- **Reusability:** Build once, use multiple times across the app.  
- **Maintainability:** Each component has its own logic and styling.  
- **Readability:** Smaller pieces are easier to understand than a monolithic UI.  
- **Separation of Concerns:** Keeps UI and logic modular.  
- **Testability:** Components can be tested independently.

---

## **Important Points About Components**

- Components can be **nested** inside other components to create complex UIs.  
- Components accept **props** (inputs) to make them dynamic.  
- Components can maintain **internal state** to track changes over time.  
- Components can have **lifecycle methods or hooks** to run code at specific points (mount, update, unmount).  
- Components help make your React app **scalable, maintainable, and efficient**.  
- **Composition vs Inheritance**: React favors **composition** (combining components) rather than inheritance.  
- **Pure vs Impure Components**:  
  - **Pure components** render output only if props or state change (can optimize performance).  
  - **Impure components** render every time parent renders.  
  - Functional components can be made pure using `React.memo`.  
- **Re-rendering**: Components re-render when **state or props change**; understanding this is key for performance.  
- **Side Effects**:  
  - Functional components handle side effects with `useEffect`.  
  - Class components handle side effects using lifecycle methods.  
- **Naming Convention**: Component names should **start with an uppercase letter**.  
  - React treats lowercase elements as **HTML tags**, not components.
  
---