import { createContext, useContext } from "react";

// Create a Context
const UserContext = createContext();

// Deeply nested component
function DisplayUser() {
  // Access context directly without prop drilling
  const user = useContext(UserContext);
  return <p>Logged in as: <strong>{user.name}</strong></p>;
}

// Intermediate component
function Dashboard() {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h4>Dashboard Component</h4>
      {/* No props needed here */}
      <DisplayUser />
    </div>
  );
}

// Parent Component
function PropDrillingContext() {
  const currentUser = { name: "User", role: "Developer" };

  return (
    <UserContext.Provider value={currentUser}>
      <div>
        <h2>Prop Drilling & Context Example</h2>
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
}

export default PropDrillingContext;