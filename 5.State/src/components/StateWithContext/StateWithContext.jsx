// StateWithContext.jsx
import { createContext, useState, useContext } from "react";

// Create a Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Child component consuming the context
function ThemeStatus() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// Main component
export default function StateWithContext() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
        <h2>State with Context Example</h2>
        <ThemeStatus />
      </div>
    </ThemeProvider>
  );
}
