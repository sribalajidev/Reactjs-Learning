import { useContext } from "react";
import { ThemeContext } from "../AppPOC";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{ margin: "10px", padding: "5px 15px" }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}