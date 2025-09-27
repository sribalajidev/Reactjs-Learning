import React, { createContext, useContext } from "react";

// 1. Create two contexts
const ThemeContext = createContext();
const AuthContext = createContext();

// 3. Nested child component consuming both contexts
function Dashboard() {
  const theme = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "10px",
        backgroundColor: theme.background,
        color: theme.text,
        borderRadius: "5px",
      }}
    >
      <h3>Dashboard</h3>
      <p>User: {auth.username}</p>
      <p>Role: {auth.role}</p>
      <p>Theme: {theme.mode}</p>
    </div>
  );
}

export default function NestedContext() {
  // 2. Values for context
  const themeValue = {
    mode: "dark",
    background: "#333",
    text: "#fff",
  };

  const authValue = {
    username: "JaneDoe",
    role: "Manager",
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <AuthContext.Provider value={authValue}>
        <div>
          <h2>Nested Context Example</h2>
          <Dashboard />
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
