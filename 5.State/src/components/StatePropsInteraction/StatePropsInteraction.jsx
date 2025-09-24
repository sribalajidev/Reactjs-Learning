// StatePropsInteraction.jsx
import { useState } from "react";

// Child Component
function Child({ count, increment }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <p>Child Component Count: {count}</p>
      <button onClick={increment}>Increment from Child</button>
    </div>
  );
}

// Parent Component
export default function StatePropsInteraction() {
  const [count, setCount] = useState(0);

  // Function to pass to child for updating state
  const increment = () => setCount(count + 1);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>State & Props Interaction Example</h2>
      <p>Parent Count: {count}</p>
      
      {/* Passing state and function to child as props */}
      <Child count={count} increment={increment} />
    </div>
  );
}
