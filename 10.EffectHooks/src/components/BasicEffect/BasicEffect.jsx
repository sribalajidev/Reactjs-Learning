import { useState, useEffect } from "react";

export default function BasicEffect() {
  const [count, setCount] = useState(0);

  // 🔹 Basic effect – runs once after component mounts
  useEffect(() => {
    console.log("Component mounted – effect runs once");

    // Example: change the document title on mount
    document.title = `Basic Effect Example`;

    // Cleanup (optional)
    return () => {
      console.log("Component unmounted – cleanup runs");
    };
  }, []); // empty dependency → run only once

  // 🔹 Effect that runs every time 'count' changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // dependency → run whenever count changes

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Basic Effect Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
