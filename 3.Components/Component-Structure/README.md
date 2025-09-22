# Component-Structure in React

This folder demonstrates **industry-style component structure** in React. It covers:

* Folder organization inside `src/components/`
* Nested and reusable components
* Props flow and event handling
* SCSS styling
* Real-world patterns and interview-ready concepts

---

## 1. Folder Structure

```
src/
│
├─ components/ # Reusable UI components
│ ├─ Button/
│ │ ├─ Button.jsx
│ │ ├─ Button.scss
│ │ └─ index.js
│ ├─ Card/
│ │ ├─ Card.jsx
│ │ ├─ Card.scss
│ │ └─ index.js
│ ├─ Presentational/ # Optional: UI-only components
│ │ ├─ Header/
│ │ │ ├─ Header.jsx
│ │ │ ├─ Header.scss
│ │ │ └─ index.js
│ │ └─ Footer/
│ │ ├─ Footer.jsx
│ │ ├─ Footer.scss
│ │ └─ index.js
│ ├─ Containers/ # Optional: Stateful components
│ │ └─ Dashboard/
│ │ ├─ Dashboard.jsx
│ │ ├─ Dashboard.scss
│ │ └─ index.js
│
├─ pages/ # Page-level components (screens/views)
│ ├─ Home/
│ │ ├─ Home.jsx
│ │ └─ Home.css
│ ├─ About/
│ │ ├─ About.jsx
│ │ └─ About.css
│ └─ Dashboard/
│ ├─ Dashboard.jsx
│ └─ Dashboard.css
│
├─ hooks/ # Custom React hooks
│ ├─ useFetch.js
│ └─ useToggle.js
│
├─ routes/ # React Router configuration
│ ├─ routes.jsx
│ └─ index.js
│
├─ context/ # React context for global state
│ ├─ AuthContext.js
│ └─ ThemeContext.js
│
├─ services/ # API calls / backend services
│ ├─ api.js
│ └─ authService.js
│
├─ utils/ # Utility functions / helpers
│ ├─ formatDate.js
│ └─ validate.js
│
├─ test/ # Centralized test cases
│ ├─ components/
│ ├─ pages/
│ └─ utils/
│
├─ App.jsx # Main root component
└─ main.jsx # Entry point for ReactDOM
```

**Notes:**

* Each component folder contains:

  * `.jsx` — component code
  * `.scss` — component-specific styles
  * `index.js` — clean exports for easier imports
* `Presentational` vs `Containers` distinction reflects **dumb vs smart components** for scalable architecture.

---

## 2. Button Component

**Button.jsx**

```jsx
import "./Button.scss";

const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
```

**Button.scss**

```scss
.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
}
```

**index.js**

```js
export { default } from "./Button";
```

---

## 3. Card Component

**Card.jsx**

```jsx
import Button from "../Button";
import "./Card.scss";

const Card = ({ title, description, onButtonClick }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Button label="Click Me" onClick={onButtonClick} />
    </div>
  );
};

export default Card;
```

**Card.scss**

```scss
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;

  .card-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 16px;
    margin-bottom: 15px;
    color: #555;
  }
}
```

**index.js**

```js
export { default } from "./Card";
```

---

## 4. App.jsx Example

```jsx
import Card from "./components/Card";

function App() {
  const handleClick = (cardTitle) => {
    alert(`Button clicked inside ${cardTitle}`);
  };

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card
        title="Card 1"
        description="This is the description for Card 1."
        onButtonClick={() => handleClick("Card 1")}
      />
      <Card
        title="Card 2"
        description="This is the description for Card 2."
        onButtonClick={() => handleClick("Card 2")}
      />
      <Card
        title="Card 3"
        description="This is the description for Card 3."
        onButtonClick={() => handleClick("Card 3")}
      />
    </div>
  );
}

export default App;
```

---

## 5. Key Concepts Demonstrated

1. **Nested Components** – Button nested inside Card.
2. **Props Flow** – title, description, and button handler passed from App → Card → Button.
3. **Reusable Components** – Same Card component reused multiple times with different content.
4. **Event Handling** – Button click triggers handler from parent component.
5. **SCSS Styling** – Each component has its own scoped SCSS.
6. **Professional Folder Structure** – index.js for clean imports, separate folders for presentational and container components.

---

## 6. Interview Points

* Difference between **presentational vs container components**
* Handling **props drilling** and using **Context API**
* **Component reusability** and composition
* CSS/SCSS organization for components
* Event handling across nested components
* How React deduplicates imported CSS for multiple instances

---
