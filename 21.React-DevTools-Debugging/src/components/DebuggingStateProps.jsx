import React, { useState } from "react";

function Child({ message }) {
  return (
    <div style={{ border: "1px dashed #888", padding: "10px", margin: "10px 0" }}>
      <h3>Child Component</h3>
      <p>Message from parent: {message}</p>
    </div>
  );
}

export default function DebuggingStateProps() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    // You can set a breakpoint here to inspect `text` and `e.target.value`
    console.log("Current input value:", e.target.value);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px 0" }}>
      <h2>Debugging State and Props Example</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "5px", width: "200px" }}
      />
      <Child message={text} />
      <p>
        Use browser DevTools or React DevTools to inspect the `text` state and the `message` prop
        passed to the child component in real time.
      </p>
    </div>
  );
}
