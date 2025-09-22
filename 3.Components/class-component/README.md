# React Class Components

## 1. What is a Class Component?

A **Class Component** in React is a JavaScript class that **extends `React.Component`**.  
It is **stateful**, can have **lifecycle methods**, and is used to create complex, dynamic UI.  

**Key Features:**
- Can maintain internal **state**  
- Can receive **props** from parent components  
- Can have **lifecycle methods** for managing side effects  
- Allows **event handling** and **dynamic rendering**  

**Syntax Example:**
```jsx
import React, { Component } from "react";

class Syntax extends Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}

export default Syntax;
```

---

## 2. Props & State
**Props**
- Passed from parent to child component
- Read-only
- Accessed with this.props.propName

**State**
- Internal data of a component
- Mutable using this.setState()
- Triggers re-render on update

**Example: Props & State**

```jsx
import React, { Component } from "react";

class PropsState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}'s Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default PropsState;
```

**Usage:**

`<PropsState name="Sri Balaji" />`

---

## 3. Lifecycle Methods

| Method                 | When It Runs       | Example Use                  |
| ---------------------- | ------------------ | ---------------------------- |
| `constructor`          | Component creation | Initialize state/props       |
| `render`               | Every render       | Display UI                   |
| `componentDidMount`    | After mount        | Start timers, fetch data     |
| `componentDidUpdate`   | After update       | React to state/props changes |
| `componentWillUnmount` | Before removal     | Cleanup timers/subscriptions |

---

## 4. Event Handling
Event handlers in class components may require binding. Arrow functions avoid binding.
`<button onClick={this.handleClick}>Click Me</button>`

---

## 5. Default Props & PropTypes
**Default Props** `DefaultPropsExample.defaultProps = { name: "Guest" };`
**Prop Types Validation** : 
```jsx
import PropTypes from "prop-types";

PropsTypeValidation.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

---

## 6. Nested Components
```jsx
class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <Child name="Sri" />
      </div>
    );
  }
}
```

---

## 7. Pros & Cons

**Pros:**
- Supports state and lifecycle methods
- Easy to handle complex UI
- Used in legacy projects

**Cons:**
- More verbose than functional components
- Requires `this` binding for events
- Hooks (functional components) are often easier

---

## 8. Real-World Use Cases

Class components are still used in enterprise or legacy React apps:
- Large dashboards with timers, charts, or API calls
- Forms and multi-step wizards
- Apps that rely on lifecycle methods
- Legacy admin panels or clones of social media apps

---

## 9. Summary of Components in this Folder

| Component                | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `Syntax.jsx`             | Basic class component syntax                   |
| `PropsState.jsx`         | Demonstrates props and state                   |
| `POC.jsx`                | Countdown timer using lifecycle methods        |
| `EventHandling.jsx`      | Handling click events, arrow functions vs bind |
| `DefaultProps.jsx`       | Using default props                            |
| `PropTypeValidation.jsx` | Validating props using `prop-types`            |
| `NestedComponents.jsx`   | Nesting child components inside parent         |

---