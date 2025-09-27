import React, { useState } from "react";

const EventDelegation = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // One event handler for all child buttons
  const handleClick = (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
      const itemId = event.target.dataset.id; // get custom data-id
      setSelectedItem(itemId);
    }
  };

  // Pretend this data is dynamic
  const items = [
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Svelte" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Delegation Example</h2>
      <p>Click a button to select an item:</p>

      {/* Single handler on parent */}
      <div onClick={handleClick} style={{ display: "flex", gap: "10px" }}>
        {items.map((item) => (
          <button
            key={item.id}
            data-id={item.id}
            style={{
              padding: "10px",
              background:
                selectedItem == item.id ? "#d1e7dd" : "#f8d7da",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {selectedItem && (
        <p>
          <strong>Selected Item:</strong>{" "}
          {items.find((i) => i.id == selectedItem)?.name}
        </p>
      )}
    </div>
  );
};

export default EventDelegation;