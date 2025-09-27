// BasicCustomHook.jsx

import { useState } from "react";

// Custom Hook: useCounter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Component using the custom hook
export default function BasicCustomHook() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Basic Custom Hook Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
