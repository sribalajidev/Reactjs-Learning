import { useState } from "react";

function ElementVariables() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleLoginToggle = () => setIsLoggedIn(!isLoggedIn);

  // Element variable
  let message;
  if (isLoggedIn) {
    message = <p>Welcome back, valued user!</p>;
  } else {
    message = <p>Please log in to access your account.</p>;
  }

  return (
    <div>
      <h2>Conditional Rendering using Element Variables</h2>
      {message} {/* Render the variable */}

      <button onClick={handleLoginToggle}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ElementVariables;
