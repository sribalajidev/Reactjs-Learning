import React, { useState } from "react";

// Component that shares its state using render props
export default function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Render Props with State Example</h2>
      {children({ count, increment, decrement })}
    </div>
  );
}
