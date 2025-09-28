import React, { useState } from "react";

export default function BasicDevTools() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "User", age: 28 });

  const increment = () => setCount((prev) => prev + 1);
  const updateName = () => setUser({ ...user, name: "Guest" });

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px 0" }}>
      <h2>Basic DevTools Example</h2>
      
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>

      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
      <button onClick={updateName}>Change Name</button>

      <p>Open React DevTools in your browser and inspect this component to see:</p>
      <ul>
        <li>Component tree structure</li>
        <li>Current state values (count, user)</li>
        <li>Props and hooks</li>
        <li>Highlight component re-renders</li>
      </ul>
    </div>
  );
}
