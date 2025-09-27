import React from "react";

export default function HeavyComponent() {
  return (
    <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#eee" }}>
      <h3>Heavy Component Loaded!</h3>
      <p>This component is loaded lazily only when needed.</p>
    </div>
  );
}
