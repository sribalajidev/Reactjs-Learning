import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function EffectWithContext() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Effect reacts to context changes
  useEffect(() => {
    console.log(`Theme changed to: ${theme}`);
    // Could also fetch theme-specific data, set localStorage, etc.
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]); // only run when theme changes

  return (
    <div style={{ padding: "20px" }}>
      <h2>Effect With Context Example</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}