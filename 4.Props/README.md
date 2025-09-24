# ReactJS Props

This folder covers all the concepts related to **Props in ReactJS**, ranging from basic usage to advanced patterns. Each concept is demonstrated in a separate component under `src/components` with detailed explanations and examples.

---

## 1. Basic Props

**Folder:** `BasicProps`
**File:** `BasicProps.jsx`

Props are the fundamental way to pass data from a parent component to a child component. Basic props allow you to pass strings, numbers, arrays, or objects and render them dynamically in the child component.

**Use cases:**

* Passing user information from a parent container to multiple child components.
* Displaying dynamic content such as lists, labels, and titles.

**Why we need it:**
Props help create **reusable and dynamic components** without hardcoding values.

**Real-world examples:**

* User profile cards where the username and profile picture are passed from parent.
* Product lists displaying name, price, and description from a backend.

---

## 2. Callback Props

**Folder:** `CallbackProps`
**File:** `CallbackProps.jsx`

Callback props allow a child component to communicate back to the parent by passing a function as a prop. The child executes this function when needed.

**Use cases:**

* Handling button clicks or form submissions inside a child component.
* Lifting state from child to parent.

**Real-world examples:**

* A form input component calling `onChange` passed from parent.
* Notification or modal components triggering actions in the parent.

---

## 3. Children Props

**Folder:** `ChildrenProps`
**File:** `ChildrenProps.jsx`

The `children` prop allows components to **render nested content dynamically**.

**Use cases:**

* Layout components like Card, Modal, or Panel that can wrap arbitrary content.

**Real-world examples:**

* `<Card>`, `<Modal>` components wrapping content passed from different pages.
* Reusable `<Section>` or `<Panel>` layouts in dashboards.

---

## 4. Default Props

**Folder:** `DefaultProps`
**File:** `DefaultProps.jsx`

Default props provide **fallback values** when a prop is not passed.

**Use cases:**

* Ensuring components display meaningful defaults.

**Real-world examples:**

* Greeting a user with `Hello, Guest!` if no username is provided.
* Setting default styles, like button colors or sizes.

---

## 5. PropTypes Validation

**Folder:** `PropTypesValidation`
**File:** `PropTypesValidation.jsx`

PropTypes provide **runtime type-checking** for props, helping catch bugs during development.

**Use cases:**

* Ensuring required props are provided.
* Validating prop types for safer and maintainable code.

**Real-world examples:**

* Components expecting numeric IDs, boolean flags, or string values from the backend.
* Preventing crashes due to invalid data types.

**Note:** Remember to run `npm install prop-types` to use PropTypes.

---

## 6. Destructuring Props

**Folder:** `DestructuringProps`
**File:** `DestructuringProps.jsx`

Destructuring allows you to **directly extract props** in the function parameter or class constructor for cleaner code.

**Use cases:**

* Simplifying prop access in large components.

**Real-world examples:**

* Components with multiple props like `name`, `age`, `role`.
* Cleaner code in parent-child prop relationships.

---

## 7. Spread Props

**Folder:** `SpreadProps`
**File:** `SpreadProps.jsx`

Spread props allow passing **all props at once** using the `...props` syntax.

**Use cases:**

* Passing down multiple props without manually specifying each one.

**Real-world examples:**

* Form input components receiving multiple attributes like `type`, `value`, `onChange`, `placeholder`.
* Wrapper components forwarding props to nested elements.

---

## 8. Advanced Patterns

**Folder:** `AdvancedPatterns`
**File:** `AdvancedPatterns.jsx`

### 8.1 Render Props

* Share logic between components by passing a **function as a prop** that renders UI.
* **Real-world use:** Mouse trackers, reusable animation logic, dynamic form components.

### 8.2 Composition via Props

* Pass components or JSX elements as props to create **flexible and reusable layouts**.
* **Real-world use:** Cards, modals, and panels that accept custom headers, bodies, and footers.

### 8.3 Polymorphic Components / `as` Prop

* Components render **different HTML tags or components** dynamically.
* **Real-world use:** Buttons or text elements in UI libraries like Chakra UI or Material UI.

### 8.4 Prop Drilling & Context Transition

* **Prop drilling:** Passing props through many intermediate components.
* **Context API:** Avoid prop drilling by sharing global data directly.
* **Real-world use:** Authentication, theme, localization, or global state management.

### 8.5 Dynamic Components / Passing Component Types

* Pass **entire React components** as props to render dynamically.
* **Real-world use:** Dashboard widgets, alert systems, plugin-based architectures.

---

### ✅ Summary

Props are **the backbone of React component communication**. By understanding both basic and advanced patterns, you can build:

* **Reusable, maintainable, and flexible components**.
* **Scalable architectures** in real-world React applications.
* **Advanced patterns** like render props, polymorphic components, and context transitions are essential for enterprise-level projects.

**Folder structure reference:**

```
src/
 ├─ components/
 │   ├─ BasicProps/
 │   │    ├─ BasicProps.jsx
 │   │    └─ index.js
 │   │
 │   ├─ CallbackProps/
 │   │    ├─ CallbackProps.jsx
 │   │    └─ index.js
 │   │
 │   ├─ ChildrenProps/
 │   │    ├─ ChildrenProps.jsx
 │   │    └─ index.js
 │   │
 │   ├─ DefaultProps/
 │   │    ├─ DefaultProps.jsx
 │   │    └─ index.js
 │   │
 │   ├─ PropTypesValidation/
 │   │    ├─ PropTypesValidation.jsx
 │   │    └─ index.js
 │   │
 │   ├─ DestructuringProps/
 │   │    ├─ DestructuringProps.jsx
 │   │    └─ index.js
 │   │
 │   ├─ SpreadProps/
 │   │    ├─ SpreadProps.jsx
 │   │    └─ index.js
 │   │
 │   ├─ AdvancedPatterns/
 │   │    ├─ AdvancedPatterns.jsx
 │   │    └─ index.js
 │   │
 │   ├─ RenderPropsPattern/                
 │   │    ├─ RenderPropsPattern.jsx
 │   │    └─ index.js
 │   │
 │   ├─ CompositionViaProps/               
 │   │    ├─ CompositionViaProps.jsx
 │   │    └─ index.js
 │   │
 │   ├─ PolymorphicComponents/             
 │   │    ├─ PolymorphicComponents.jsx
 │   │    └─ index.js
 │   │
 │   ├─ PropDrillingContext/              
 │   │    ├─ PropDrillingContext.jsx
 │   │    └─ index.js
 │   │
 │   ├─ DynamicComponents/                 
 │   │    ├─ DynamicComponents.jsx
 │   │    └─ index.js
 │   │
 │   └─ index.js                           # optional global export if needed
 │
 ├─ App.jsx
 └─ main.jsx

```
