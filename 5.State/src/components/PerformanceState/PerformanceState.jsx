// PerformanceState.jsx
import { useState, useCallback, memo } from "react";

// Child component that only re-renders if props change
const CounterDisplay = memo(({ count, onIncrement }) => {
  console.log("CounterDisplay re-rendered");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
});

export default function PerformanceState() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // useCallback ensures the same function reference between renders
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Performance State Example</h2>

      {/* Child component */}
      <CounterDisplay count={count} onIncrement={increment} />

      <button onClick={() => setOther(!other)}>
        Toggle Other State ({other.toString()})
      </button>
    </div>
  );
}
