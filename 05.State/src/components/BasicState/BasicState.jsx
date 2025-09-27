// BasicState.jsx
import { useState } from "react"; // Import useState hook from React

export default function BasicState() {
  // Step 1: Initialize state variable 'count' with initial value 0
  // setCount is the function used to update the state
  const [count, setCount] = useState(0);

  // Step 2: Event handlers to increment and decrement count
  const increment = () => setCount(count + 1); // increase count by 1
  const decrement = () => setCount(count - 1); // decrease count by 1

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Basic State Example: Counter</h2>
      <p>Current Count: {count}</p> {/* Step 3: Display state variable */}
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
