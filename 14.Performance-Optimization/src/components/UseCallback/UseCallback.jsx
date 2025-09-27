import React, { useState, useCallback } from "react";

// Child component that only re-renders when `onClick` changes
const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoized callback to increment count
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>useCallback Example</h2>

      <div style={{ marginBottom: "10px" }}>
        <p>Count: {count}</p>
        <Button onClick={increment}>Increment Count</Button>
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
