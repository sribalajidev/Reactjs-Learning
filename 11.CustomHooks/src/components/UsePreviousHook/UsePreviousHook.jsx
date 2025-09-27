import { useState, useEffect, useRef } from "react";

// Custom Hook: usePrevious
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Component using usePrevious
export default function UsePreviousHook() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Use Previous Hook Example</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount ?? "N/A"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
