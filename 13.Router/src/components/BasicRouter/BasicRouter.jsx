import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Example pages
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}


export default function BasicRouter() {
  return (
    <Router>
      <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
        <h2>Basic Router Example</h2>

        {/* Navigation */}
        <nav style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
          <Link to="/login">Login</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
