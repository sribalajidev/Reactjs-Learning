import React, { useState } from "react";

export default function KeyOptimization() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);

  const shuffleItems = () => {
    // Randomly shuffle array
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Key Optimization Example</h2>
      <button onClick={shuffleItems} style={{ marginBottom: "10px" }}>
        Shuffle Items
      </button>

      <ul>
        {items.map((item) => (
          // Using proper key based on unique id
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
