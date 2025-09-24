import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [input, setInput] = useState(searchTerm);
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    setSearchTerm(debouncedInput);
  }, [debouncedInput]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      style={{ padding: "10px", margin: "10px 0", width: "100%" }}
    />
  );
}
