import React, { useState } from "react";

export default function DebuggingWithBreakpoints() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Set a breakpoint here in DevTools to inspect this function
    console.log("Increment function called");
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    // Another breakpoint for debugging
    console.log("Decrement function called");
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px 0" }}>
      <h2>Debugging with Breakpoints Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
      <p>
        Open your browser DevTools, go to the Sources tab, and set breakpoints on the functions
        to inspect state changes step by step.
      </p>
    </div>
  );
}
