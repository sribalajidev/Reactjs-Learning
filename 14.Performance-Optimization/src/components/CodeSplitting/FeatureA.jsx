import React from "react";

export default function FeatureA() {
  return (
    <div style={{ padding: "10px", backgroundColor: "#f0f8ff" }}>
      <h3>Feature A Loaded!</h3>
      <p>This component is loaded only when requested by the user.</p>
    </div>
  );
}
