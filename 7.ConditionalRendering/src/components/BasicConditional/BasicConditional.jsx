import { useState } from "react";

function BasicConditional() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleLoginToggle = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      <h2>Basic Conditional Rendering</h2>

      {/* Conditional rendering using ternary */}
      {isLoggedIn ? (
        <p>Welcome, User! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      {/* Button to toggle state */}
      <button onClick={handleLoginToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default BasicConditional;