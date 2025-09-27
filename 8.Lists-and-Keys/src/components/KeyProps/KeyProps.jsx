import { useState } from "react";

export default function KeyProps() {
  // Example list of objects with unique IDs
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Alice" },
  ]);

  const addUser = () => {
    const newUser = {
      id: Date.now(), // generate unique id
      name: `User ${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>Key Props Example</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={addUser}>Add User</button>
    </div>
  );
}
  