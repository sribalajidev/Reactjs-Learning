import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

// Layout component
function MainLayout() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Main Layout</h2>
      <nav style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      {/* Outlet renders the nested route */}
      <Outlet />
    </div>
  );
}

// Pages
function Home() {
  return <h3>Home Page Content</h3>;
}

function Profile() {
  return <h3>Profile Page Content</h3>;
}

function Settings() {
  return <h3>Settings Page Content</h3>;
}

// Main Component
export default function LayoutRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Nested routes */}
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
