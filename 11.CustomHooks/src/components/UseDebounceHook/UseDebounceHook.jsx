import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

export default function UseDebounceHook() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Debounced API call with:", debouncedSearchTerm);
      // Here you can call your API with debouncedSearchTerm
    }
  }, [debouncedSearchTerm]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Use Debounce Hook</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Type to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Debounced Value: {debouncedSearchTerm}</p>
    </div>
  );
}
