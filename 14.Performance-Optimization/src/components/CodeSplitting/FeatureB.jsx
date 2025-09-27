import React from "react";

export default function FeatureB() {
  return (
    <div style={{ padding: "10px", backgroundColor: "#ffe4e1" }}>
      <h3>Feature B Loaded!</h3>
      <p>This component is also loaded lazily using code splitting.</p>
    </div>
  );
}
