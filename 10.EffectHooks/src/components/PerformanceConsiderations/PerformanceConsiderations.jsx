import { useState, useEffect } from "react";

export default function PerformanceConsiderations() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce search input to reduce API calls / heavy calculations
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler); // Cleanup previous timer
    };
  }, [search]);

  // Example: fetch/search based on debounced input
  useEffect(() => {
    if (debouncedSearch) {
      console.log(`Fetching data for: ${debouncedSearch}`);
      // Simulate fetch or heavy computation here
    }
  }, [debouncedSearch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect Performance Considerations</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <p>Debounced Value: {debouncedSearch}</p>
    </div>
  );
}