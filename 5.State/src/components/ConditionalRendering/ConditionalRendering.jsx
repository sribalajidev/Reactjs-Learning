// ConditionalRendering.jsx
import { useState } from "react";

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Conditional Rendering Example</h2>

      {/* Render content based on isLoggedIn state */}
      {isLoggedIn ? (
        <p>Welcome back, User!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      <button onClick={toggleLogin} style={{ marginTop: "10px" }}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
