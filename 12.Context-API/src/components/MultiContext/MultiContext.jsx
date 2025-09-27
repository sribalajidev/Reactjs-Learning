import React, { createContext, useContext, useState } from "react";

// Create two contexts: Theme and Auth
const ThemeContext = createContext();
const AuthContext = createContext();

// Component to toggle theme
function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// Component to login/logout
function AuthToggler() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  return (
    <button onClick={toggleAuth}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

// Component to display current state
function DisplayStatus() {
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <p>
      Theme: {theme} | User is {isLoggedIn ? "Logged In" : "Logged Out"}
    </p>
  );
}

export default function MultiContextComponent() {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleAuth = () => setIsLoggedIn((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          <h2>Multi Context Example</h2>
          <DisplayStatus />
          <ThemeToggler />
          <AuthToggler />
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
