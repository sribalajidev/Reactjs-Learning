import React, { useState } from "react";

export default function DebuggingWithReactDevTools() {
  const [user, setUser] = useState({ name: "John Doe", age: 25 });
  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const updateName = () => {
    setUser((prev) => ({ ...prev, name: "Jane Smith" }));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px 0" }}>
      <h2>Debugging with React DevTools Example</h2>

      <p>
        <strong>Name:</strong> {user.name} <br />
        <strong>Age:</strong> {user.age}
      </p>

      {showDetails && (
        <div style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
          <p>This section is visible and can be toggled.</p>
        </div>
      )}

      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <button onClick={updateName} style={{ marginLeft: "10px" }}>
        Update Name
      </button>

      <p>
        Open React DevTools in your browser to inspect this component's state and props.
      </p>
    </div>
  );
}
