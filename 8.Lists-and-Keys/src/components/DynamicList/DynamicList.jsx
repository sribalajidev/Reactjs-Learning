import { useState } from "react";

export default function DynamicList() {
  // 1. State to hold dynamic items
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  // 2. Function to add new item
  const addItem = () => {
    const newItem = `Fruit ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  // 3. Function to remove last item
  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      <h2>Dynamic List Example</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>  // {/* Using index as key for simplicity */}
        ))}
      </ul>

      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem} style={{ marginLeft: "10px" }}>
        Remove Item
      </button>
    </div>
  );
}
