// OptimisticUIState.jsx
import { useState } from "react";

export default function OptimisticUIState() {
  const [likes, setLikes] = useState(0);
  const [error, setError] = useState("");

  const handleLike = () => {
    // Optimistic update: increment immediately
    setLikes((prev) => prev + 1);

    // Simulate API call
    fakeApiCall()
      .then(() => {
        console.log("Backend updated successfully");
      })
      .catch(() => {
        // Revert if API fails
        setLikes((prev) => prev - 1);
        setError("Failed to update like. Please try again.");
      });
  };

  const fakeApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 20% failure chance
        Math.random() < 0.8 ? resolve() : reject();
      }, 1000);
    });
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Optimistic UI Example</h2>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
