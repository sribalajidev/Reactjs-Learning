import React, { Suspense, lazy, useState } from "react";

// Lazy load components for code splitting
const FeatureA = lazy(() => import("./FeatureA"));
const FeatureB = lazy(() => import("./FeatureB"));

export default function CodeSplitting() {
  const [feature, setFeature] = useState(null);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>React Code Splitting Example</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setFeature("A")} style={{ marginRight: "10px" }}>
          Load Feature A
        </button>
        <button onClick={() => setFeature("B")}>Load Feature B</button>
      </div>

      <Suspense fallback={<p>Loading feature...</p>}>
        {feature === "A" && <FeatureA />}
        {feature === "B" && <FeatureB />}
      </Suspense>
    </div>
  );
}
