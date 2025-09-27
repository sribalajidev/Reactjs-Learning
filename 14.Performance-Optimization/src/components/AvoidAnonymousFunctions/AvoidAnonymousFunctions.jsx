import React, { useState } from "react";

export default function AvoidAnonymousFunctions() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`));

  // Stable click handler to avoid re-creating function each render
  const handleClick = (item) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Avoid Anonymous Functions Example</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h3>Item List</h3>
      <ul>
        {items.map((item) => (
          // Using a stable function instead of inline arrow function
          <li key={item}>
            <button onClick={() => handleClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
