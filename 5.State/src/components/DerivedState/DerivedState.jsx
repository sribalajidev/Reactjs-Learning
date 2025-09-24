// DerivedState.jsx
import { useState, useEffect } from "react";

export default function DerivedState({ initialCount }) {
  const [count, setCount] = useState(initialCount || 0);
  const [doubleCount, setDoubleCount] = useState(count * 2);

  // Update derived state whenever `count` changes
  useEffect(() => {
    setDoubleCount(count * 2);
  }, [count]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Derived State Example</h2>
      <p>Count: {count}</p>
      <p>Double Count (derived): {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
