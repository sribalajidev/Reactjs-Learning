import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Child component consuming context dynamically
function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  const changeUserRole = () => {
    setUser((prev) => ({
      ...prev,
      role: prev.role === "Admin" ? "Member" : "Admin",
    }));
  };

  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginTop: "10px",
      }}
    >
      <h3>User Profile</h3>
      <p>Username: {user.username}</p>
      <p>Role: {user.role}</p>
      <button onClick={changeUserRole}>
        Toggle Role (Admin ↔ Member)
      </button>
    </div>
  );
}

export default function DynamicContext() {
  const [user, setUser] = useState({
    username: "JohnDoe",
    role: "Member",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h2>Dynamic Context Example</h2>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}
