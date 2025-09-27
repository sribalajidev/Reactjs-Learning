import { useState } from "react";

function ShortCircuitOperator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <div>
      <h2>Short-Circuit Operator Conditional Example</h2>

      {/* Show welcome message only if logged in */}
      {isLoggedIn && <p>Welcome back, user!</p>}

      {/* Show notifications only if there are any */}
      {notifications > 0 && <p>You have {notifications} new notifications</p>}

      {/* Fallback message using || */}
      <p>{isLoggedIn || "Please log in to access your dashboard"}</p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login
        </button>
        <button onClick={() => setNotifications(notifications + 1)}>
          Add Notification
        </button>
        <button onClick={() => setNotifications(0)}>Clear Notifications</button>
      </div>
    </div>
  );
}

export default ShortCircuitOperator;
