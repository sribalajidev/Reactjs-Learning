import React, { Suspense, lazy, useState } from "react";

// Lazy load components
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function LazyLoading() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>React Lazy Loading Example</h2>

      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Load"} Heavy Component
      </button>

      {show && (
        <Suspense fallback={<p>Loading component...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}
