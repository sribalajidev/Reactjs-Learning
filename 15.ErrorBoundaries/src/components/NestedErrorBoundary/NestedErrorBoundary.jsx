import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackUI from "../ErrorFallbackUI/ErrorFallbackUI";

// Child components for demonstration
function ChildComponent({ triggerError }) {
  if (triggerError) {
    throw new Error("Child component error!");
  }
  return <p>Child component rendered successfully.</p>;
}

export default function NestedErrorBoundary() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Nested Error Boundary Example</h2>

      {/* Outer Error Boundary */}
      <ErrorBoundary
        FallbackComponent={ErrorFallbackUI}
        onReset={() => {
          console.log("Outer boundary reset");
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <h3>Outer Boundary</h3>

          {/* Inner Error Boundary */}
          <ErrorBoundary
            FallbackComponent={ErrorFallbackUI}
            onReset={() => {
              console.log("Inner boundary reset");
            }}
          >
            <ChildComponent triggerError={false} />
            <ChildComponent triggerError={true} />
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    </div>
  );
}
