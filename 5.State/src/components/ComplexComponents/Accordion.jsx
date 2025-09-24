// Accordion.jsx
import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "Item 1", content: "Content for Item 1" },
    { title: "Item 2", content: "Content for Item 2" },
    { title: "Item 3", content: "Content for Item 3" },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Accordion Example</h2>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggle(index)} style={{ display: "block", width: "100%" }}>
            {item.title}
          </button>
          {openIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
