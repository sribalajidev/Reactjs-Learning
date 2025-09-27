import React, { createContext, useContext } from "react";

// 1. Create a Context
const UserContext = createContext();

function UserProfile() {
  // 3. Consume the context
  const user = useContext(UserContext);
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default function BasicContext() {
  // 2. Value to share globally
  const userValue = {
    name: "John Doe",
    age: 28,
    role: "Admin",
  };

  return (
    <UserContext.Provider value={userValue}>
      <div>
        <h2>Basic Context Example</h2>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}
