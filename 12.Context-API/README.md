# React Context API - Learning Reference

This section covers the **Context API** in React, which allows sharing state globally across components without the need for prop drilling. Context API is a core React feature used extensively in real-world applications to manage global state such as themes, authentication, notifications, and more.

---

## **1. BasicContext**

**Folder/File:** `BasicContext/BasicContext.jsx`
**Description:**

* Introduces the creation and usage of a basic context.
* Shows how to create a context using `React.createContext()`, provide a value with `Provider`, and consume it using `useContext`.
  **Use Case / Real-World Example:**
* Sharing a theme or configuration across the entire app.
* Example: Switching between light/dark mode.

---

## **2. NestedContext**

**Folder/File:** `NestedContext/NestedContext.jsx`
**Description:**

* Demonstrates using multiple nested contexts within a component tree.
* Shows how to consume multiple contexts in deeply nested components.
  **Use Case / Real-World Example:**
* Complex apps where multiple pieces of global state must be available in nested components.
* Example: A dashboard that uses both user authentication and theme settings.

---

## **3. DynamicContext**

**Folder/File:** `DynamicContext/DynamicContext.jsx`
**Description:**

* Context values can change dynamically during runtime.
* Updates are automatically reflected across all consuming components.
  **Use Case / Real-World Example:**
* Switching themes or user preferences dynamically without prop drilling.
* Example: Updating language settings globally when the user selects a new language.

---

## **4. ContextWithReducer**

**Folder/File:** `ContextWithReducer/ContextWithReducer.jsx`
**Description:**

* Combines Context API with `useReducer` for complex state management.
* Allows centralized and predictable state updates across multiple components.
  **Use Case / Real-World Example:**
* Managing a global shopping cart state, where actions like add, remove, or update quantity are needed.
* Example: E-commerce cart management.

---

## **5. ContextWithAPI**

**Folder/File:** `ContextWithAPI/ContextWithAPI.jsx`
**Description:**

* Uses Context API to manage state fetched from external APIs.
* Shows how data fetched once can be shared across multiple components.
  **Use Case / Real-World Example:**
* Fetching user profile or products data once and providing it globally.
* Example: Dashboard fetching user analytics or product list for multiple child components.

---

## **6. ThemeContext**

**Folder/File:** `ThemeContext/ThemeContext.jsx`
**Description:**

* Specialized context to manage and toggle themes globally.
* Can use a toggle function to switch between light/dark modes.
  **Use Case / Real-World Example:**
* Providing consistent UI themes across an entire application.
* Example: Dark mode toggle in admin panel or website.

---

## **7. MultiContext**

**Folder/File:** `MultiContext/MultiContext.jsx`
**Description:**

* Demonstrates using multiple contexts simultaneously.
* Shows how different pieces of state can be combined to manage complex applications.
  **Use Case / Real-World Example:**
* Applications with themes, authentication, and notifications all at the same time.
* Example: Dashboard requiring theme, auth state, and notification management for multiple modules.

---

## **8. AdvancedPatternsContext**

**Folder/File:** `AdvancedPatternsContext/AdvancedPatternsContext.jsx`
**Description:**

* Real-world POC combining multiple contexts and state updates.
* Demonstrates nesting contexts, dynamic updates, and consuming multiple contexts in components.
* Includes simulation of API fetching, toggling themes, login/logout actions, and notifications management.
  **Use Case / Real-World Example:**
* A fully functional dashboard example:

  * Theme toggle (light/dark mode).
  * Authentication login/logout with conditional rendering.
  * Notification panel showing new messages after login.
* Shows best practices in combining multiple contexts and providing real-time updates across the app.

---

## **Why Context API?**

* Eliminates prop drilling by allowing global state sharing.
* Simplifies state management for moderate complexity applications.
* Works well with hooks like `useContext` and `useReducer`.
* Can be combined with API fetching, local storage, and real-time updates.
* Ideal for theming, authentication, language preferences, notifications, and global configuration.

---

## **Summary**

By mastering **Context API**, you can:

* Share state globally without passing props down multiple levels.
* Combine multiple contexts efficiently for real-world applications.
* Implement dynamic state updates that reflect across the entire app.
* Build advanced reusable patterns using nested contexts and reducers.

**All concepts are available in:**
`src/components/` folder. Each subfolder contains the respective `.jsx` file for hands-on practice and reference.
