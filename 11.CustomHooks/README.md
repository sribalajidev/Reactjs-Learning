# React Custom Hooks - Learning Reference

This section covers **Custom Hooks** in React, explaining each concept, why it is needed, and real-world use cases. All examples are structured under `src/components/CustomHooks/`.

---

## 1. BasicCustomHook

**Folder/File:** `BasicCustomHook/BasicCustomHook.jsx`  

- **Description:** Introduces the creation of a simple custom hook to encapsulate reusable logic.  
- **Use Case:** Helps avoid duplicating logic across multiple components.  
- **Real-world Example:** A hook to manage a counter or toggle state that can be reused in multiple components.

---

## 2. UsePreviousHook

**Folder/File:** `UsePreviousHook/UsePreviousHook.jsx`  

- **Description:** Custom hook to store and access the previous value of a state or prop.  
- **Use Case:** Needed when you want to compare previous and current state values.  
- **Real-world Example:** Highlighting changes in a form field, implementing undo functionality, or tracking previous API request values.

---

## 3. UseWindowSizeHook

**Folder/File:** `UseWindowSizeHook/UseWindowSizeHook.jsx`  

- **Description:** Tracks window dimensions dynamically.  
- **Use Case:** Enables responsive design and conditional rendering based on screen size.  
- **Real-world Example:** Adjusting layout for mobile vs. desktop, showing/hiding components depending on viewport size.

---

## 4. UseFetchHook

**Folder/File:** `UseFetchHook/UseFetchHook.jsx`  

- **Description:** Encapsulates API fetching logic including loading and error states.  
- **Use Case:** Reusable API call hook to avoid repeating fetch logic in multiple components.  
- **Real-world Example:** Fetching product lists, user data, or any remote resource across multiple screens.

---

## 5. UseLocalStorageHook

**Folder/File:** `UseLocalStorageHook/UseLocalStorageHook.jsx`  

- **Description:** Custom hook to store and retrieve state in localStorage.  
- **Use Case:** Persisting user preferences or form data across sessions.  
- **Real-world Example:** Remembering theme settings, saving shopping cart state.

---

## 6. UseSessionStorageHook

**Folder/File:** `UseSessionStorageHook/UseSessionStorageHook.jsx`  

- **Description:** Similar to `UseLocalStorageHook` but stores state in sessionStorage.  
- **Use Case:** Persists state only for the current tab session.  
- **Real-world Example:** Keeping user session info alive until the tab is closed, like temporary filters in a dashboard.

---

## 7. UseDebounceHook

**Folder/File:** `UseDebounceHook/UseDebounceHook.jsx`  

- **Description:** Provides a debounced value for input or state changes.  
- **Use Case:** Reduces unnecessary function calls or API requests during rapid user input.  
- **Real-world Example:** Search bar with live API filtering, preventing excessive requests on each keystroke.

---

## 8. UseIntervalHook

**Folder/File:** `UseIntervalHook/UseIntervalHook.jsx`  

- **Description:** Custom hook to handle intervals in a React-friendly way.  
- **Use Case:** Replace `setInterval` in components to ensure proper cleanup and updates.  
- **Real-world Example:** Auto-refreshing data feeds, polling server updates, live clocks.

---

## 9. UseToggleHook

**Folder/File:** `UseToggleHook/UseToggleHook.jsx`  

- **Description:** Provides a simple boolean toggle hook.  
- **Use Case:** Easily toggle state between true/false without writing repetitive code.  
- **Real-world Example:** Toggle dark mode, show/hide elements, enable/disable features in UI.

---

## 10. AdvancedPatternsHook

**Folder/File:** `AdvancedPatternsHook/AdvancedPatternsHook.jsx`  

- **Description:** Combines multiple custom hooks into a **real-world POC**.  
- **Use Case:** Demonstrates how multiple hooks work together in a functional product feature.  
- **Real-world Example:** Product listing page with:  
  - Theme toggle using `useToggleHook`  
  - Window size display using `useWindowSizeHook`  
  - Search input with debounce using `useDebounceHook`  
  - Product fetching using `useFetchHook`  
  - Dynamic filtering and live UI updates  

- This component showcases the **power of custom hooks** to abstract complex logic and create reusable patterns for production applications.

---

## Summary

By learning **Custom Hooks**, you can:

1. **Abstract Reusable Logic** – move common functionality out of components.  
2. **Improve Code Readability** – keep component code clean and focused on rendering.  
3. **Enable Real-World Features** – implement persistent storage, live updates, and dynamic UIs.  
4. **Reduce Bugs** – manage side effects and state cleanly across multiple components.  

---
