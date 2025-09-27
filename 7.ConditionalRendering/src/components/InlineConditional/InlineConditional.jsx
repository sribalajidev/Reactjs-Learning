import { useState } from "react";

function InlineConditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      <h2>Conditional Rendering using Inline Conditions</h2>

      {/* Inline ternary */}
      <p>{isLoggedIn ? "You are logged in!" : "You are not logged in."}</p>

      {/* Inline && */}
      {isLoggedIn && <p>Welcome! You now have access to premium content.</p>}

      <button onClick={handleToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default InlineConditional;