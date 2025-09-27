import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

// Fake Login Component
function Login({ onLogin }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Page</h2>
      <p>You must log in to access the Dashboard</p>
      <button
        onClick={onLogin}
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        Log In
      </button>
    </div>
  );
}

// Protected Dashboard Component
function Dashboard({ onLogout }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard (Protected)</h2>
      <p>Welcome to the protected dashboard!</p>
      <button
        onClick={onLogout}
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        Log Out
      </button>
    </div>
  );
}

// Reusable ProtectedRoute component
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function ProtectedRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        margin: "10px 0",
      }}
    >
      <h2>Protected Routes Example</h2>
      <Router>
        <nav style={{ marginBottom: "10px" }}>
          <Link to="/login" style={{ marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
      </Router>
    </div>
  );
}
