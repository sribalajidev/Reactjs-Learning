import { useState, useEffect } from "react";

// Custom hook: useDebounce
export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup timeout if value changes before delay
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}