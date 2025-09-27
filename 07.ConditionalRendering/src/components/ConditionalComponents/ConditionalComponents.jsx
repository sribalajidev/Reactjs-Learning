import { useState } from "react";

function AdminPanel() {
  return <p>Welcome Admin! You can manage users and settings.</p>;
}

function UserPanel() {
  return <p>Welcome User! You can view your dashboard.</p>;
}

function GuestPanel() {
  return <p>Welcome Guest! Please login to access more features.</p>;
}

function ConditionalComponents() {
  const [role, setRole] = useState("guest");

  return (
    <div>
      <h2>Conditional Components Example</h2>

      {role === "admin" && <AdminPanel />}
      {role === "user" && <UserPanel />}
      {role === "guest" && <GuestPanel />}

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setRole("admin")}>Admin</button>
        <button onClick={() => setRole("user")}>User</button>
        <button onClick={() => setRole("guest")}>Guest</button>
      </div>
    </div>
  );
}

export default ConditionalComponents;