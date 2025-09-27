import { useState, useEffect } from "react";

export default function EffectWithDependencies() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Runs when component mounts + when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    document.title = `Clicked ${count} times`;
  }, [count]); // dependency → re-run when count changes

  // Runs when text changes
  useEffect(() => {
    console.log(`Text changed to: ${text}`);
  }, [text]); // dependency → re-run when text changes

  // ⚠️ Without dependency array → runs after every render
  useEffect(() => {
    console.log("This runs on *every* render");
  });

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Effect With Dependencies</h2>

      <div style={{ marginBottom: "10px" }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Type something"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
