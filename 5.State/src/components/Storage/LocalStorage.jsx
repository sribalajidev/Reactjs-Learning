// LocalStorage.jsx
import { useState, useEffect } from "react";

export default function LocalStorageExample() {
  const [name, setName] = useState(() => {
    // Load from localStorage or default value
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    localStorage.setItem("name", name); // Save to localStorage on change
  }, [name]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>LocalStorage Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}
