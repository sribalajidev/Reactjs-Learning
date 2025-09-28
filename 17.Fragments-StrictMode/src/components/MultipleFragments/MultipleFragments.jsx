import React from "react";

export default function MultipleFragments() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Multiple Fragments Example</h2>
      <ul>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>{item}</li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}