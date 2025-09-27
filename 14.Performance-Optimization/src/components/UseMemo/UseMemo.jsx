import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation function
  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoized value: only recalculated when `count` changes
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>useMemo Example</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Expensive Calculation Result: {memoizedValue}</p>
      </div>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>Typed Text: {text}</p>
      </div>
    </div>
  );
}
