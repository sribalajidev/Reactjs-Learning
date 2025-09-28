import React, { useState, useEffect } from "react";

function ChildComponent() {
  useEffect(() => {
    console.log("ChildComponent mounted");
    return () => console.log("ChildComponent unmounted");
  }, []);

  return <p>Child Component Rendered</p>;
}

export default function StrictModeDemo() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Strict Mode Demo</h2>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Hide" : "Show"} Child
      </button>
      <hr />
      {showChild && <ChildComponent />}
      <p>Check console to see useEffect behavior in Strict Mode.</p>
    </div>
  );
}
