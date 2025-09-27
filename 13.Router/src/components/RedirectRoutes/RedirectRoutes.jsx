import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

// --- Pages ---
function Home() {
  return <h2>Home Page</h2>;
}

function OldPage() {
  return <h2>You should never see this page because it redirects…</h2>;
}

function Dashboard() {
  return <h2>Dashboard Page (Protected)</h2>;
}

// Login now accepts setAuth to change state
function Login({ setAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // simulate login success
    setAuth(true);              // update auth state
    navigate("/dashboard");     // programmatic redirect after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login & Go to Dashboard</button>
    </div>
  );
}

// --- Main Component ---
export default function RedirectRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
        <h2>Redirect Routes Example</h2>

        <nav style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/old-page" style={{ marginRight: "10px" }}>
            Old Page (Redirect)
          </Link>
          <Link to="/dashboard" style={{ marginRight: "10px" }}>
            Dashboard (Protected)
          </Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          {/* Basic Pages */}
          <Route path="/" element={<Home />} />

          {/* Redirecting from /old-page to / */}
          <Route path="/old-page" element={<Navigate to="/" replace />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
}
