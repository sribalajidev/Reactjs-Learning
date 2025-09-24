// UpdateState.jsx
import { useState } from "react";

export default function UpdateState() {
  // Simple numeric state
  const [count, setCount] = useState(0);

  // Object state
  const [user, setUser] = useState({ name: "Guest", age: 25 });

  // Functional update example (for async-safe updates)
  const increment = () => setCount(prevCount => prevCount + 1);

  // Update object state
  const updateName = () => setUser(prevUser => ({ ...prevUser, name: "John Doe" }));

  // Update multiple fields in object
  const updateAge = () => setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Update State Example</h2>

      {/* Simple numeric state */}
      <p>Count: {count}</p>
      <button onClick={increment} style={{ marginBottom: "10px" }}>Increment Count</button>

      {/* Object state */}
      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
      <button onClick={updateName} style={{ marginRight: "10px" }}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
}
