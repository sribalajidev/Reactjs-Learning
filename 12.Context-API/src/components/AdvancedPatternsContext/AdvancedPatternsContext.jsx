import React, { createContext, useState, useContext, useEffect } from "react";

// Contexts
const ThemeContext = createContext();
const AuthContext = createContext();
const NotificationContext = createContext();

// Theme toggler component
function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// Auth login/logout component
function AuthToggler() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

// Notification component
function NotificationPanel() {
  const { notifications, markAllRead } = useContext(NotificationContext);
  return (
    <div style={{ marginTop: "10px" }}>
      <h4>Notifications ({notifications.filter(n => !n.read).length})</h4>
      <ul>
        {notifications.map((n, idx) => (
          <li key={idx} style={{ color: n.read ? "#999" : "#000" }}>
            {n.message}
          </li>
        ))}
      </ul>
      <button onClick={markAllRead}>Mark All Read</button>
    </div>
  );
}

// Realistic Advanced POC Component
export default function AdvancedPatternsContext() {
  // Theme state
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  // Notification state
  const [notifications, setNotifications] = useState([
    { message: "Welcome to the app!", read: false },
  ]);

  // Simulate API fetching notifications when user logs in
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        setNotifications((prev) => [
          ...prev,
          { message: "You have 3 new messages.", read: false },
        ]);
      }, 1000);
    } else {
      setNotifications([]);
    }
  }, [isLoggedIn]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <NotificationContext.Provider value={{ notifications, markAllRead }}>
          <div
            style={{
              padding: "20px",
              backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
              color: theme === "light" ? "#000" : "#fff",
              minHeight: "200px",
            }}
          >
            <h2>Advanced Patterns Context POC</h2>
            <AuthToggler />
            <ThemeToggler />
            {isLoggedIn && <NotificationPanel />}
          </div>
        </NotificationContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
