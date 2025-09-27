import React, { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Component to toggle theme
function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// Component to display current theme
function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
}

export default function ThemeContextComponent() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          padding: "20px",
          backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h2>Theme Context Example</h2>
        <ThemeDisplay />
        <ThemeToggler />
      </div>
    </ThemeContext.Provider>
  );
}
