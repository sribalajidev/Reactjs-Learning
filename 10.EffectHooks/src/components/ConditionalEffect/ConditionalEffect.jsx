import { useState, useEffect } from "react";

export default function ConditionalEffect() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Effect runs only when userId changes AND is not empty
  useEffect(() => {
    if (!userId) return; // if userId is empty, do nothing

    setLoading(true);
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // dependency array — runs only when userId changes

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Conditional Effect Example</h2>

      <label>
        Enter User ID (1–10):{" "}
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>

      {loading && <p>Loading user data…</p>}

      {userData && (
        <div style={{ marginTop: "15px" }}>
          <h3>{userData.name}</h3>
          <p>Email: {userData.email}</p>
          <p>City: {userData.address.city}</p>
        </div>
      )}
    </div>
  );
}
