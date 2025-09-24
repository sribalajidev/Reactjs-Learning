// SessionStorage.jsx
import { useState, useEffect } from "react";

export default function SessionStorageExample() {
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>SessionStorage Example</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
