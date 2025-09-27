import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import Login from "./Login";

export default function NestedRoutes() {
  return (
    <Router>
      <nav>
        <Link to="dashboard">Dashboard</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link> |{" "}
        <Link to="login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Layout component with Outlet to render nested routes
function Layout() {
  return (
    <div>
      <h1>Nested Routes Example</h1>
      <Outlet />
    </div>
  );
}
