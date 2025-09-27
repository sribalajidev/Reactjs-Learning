// DebouncedState.jsx
import { useState, useEffect } from "react";

export default function DebouncedState() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query); // Update only after delay
    }, 500); // 500ms debounce

    // Cleanup timeout if query changes before delay
    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Debounced State Example</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Debounced Query: {debouncedQuery}</p>
    </div>
  );
}
