import React, { useState } from "react";
import "./State.css"; // optional CSS for class toggling

function State() {
  // Counter state
  const [count, setCount] = useState(0);

  // Toggle class state
  const [isActive, setIsActive] = useState(false);

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function
  const decrement = () => setCount(count - 1);

  // Toggle class function
  const toggleClass = () => setIsActive(!isActive);

  return (
    // Apply class dynamically based on isActive
    <div className={isActive ? "active" : "inactive"}>
      <h2>State Example</h2>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <p>Toggle Active Class Example</p>
      <button onClick={toggleClass}>
        {isActive ? "Remove Active Class" : "Add Active Class"}
      </button>
    </div>
  );
}

export default State;
