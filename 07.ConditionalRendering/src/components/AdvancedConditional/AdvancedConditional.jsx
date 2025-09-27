import { useState } from "react";

function AdvancedConditional() {
  const [user, setUser] = useState({
    name: "John",
    role: "admin",
    isActive: true
  });

  const renderContent = () => {
    if (!user.isActive) return <p>User is inactive</p>;

    return (
      <>
        {user.role === "admin" && <p>Welcome Admin {user.name}!</p>}
        {user.role === "editor" && <p>Welcome Editor {user.name}!</p>}
        {user.role === "viewer" && <p>Welcome Viewer {user.name}!</p>}
      </>
    );
  };

  return (
    <div>
      <h2>Advanced Conditional Rendering Example</h2>
      {renderContent()}

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setUser({ ...user, role: "admin" })}>Admin</button>
        <button onClick={() => setUser({ ...user, role: "editor" })}>Editor</button>
        <button onClick={() => setUser({ ...user, role: "viewer" })}>Viewer</button>
        <button onClick={() => setUser({ ...user, isActive: false })}>Deactivate</button>
        <button onClick={() => setUser({ ...user, isActive: true })}>Activate</button>
      </div>
    </div>
  );
}

export default AdvancedConditional;
