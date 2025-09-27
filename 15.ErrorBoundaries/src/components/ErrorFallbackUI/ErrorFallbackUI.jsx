import React from "react";

// Functional component to show a fallback UI for errors
export default function ErrorFallbackUI({ error, resetErrorBoundary }) {
  return (
    <div style={{ padding: "20px", border: "2px solid orange", color: "orange" }}>
      <h2>Oops! Something went wrong.</h2>
      <p>{error?.message || "Unknown error occurred"}</p>
      <button onClick={resetErrorBoundary} style={{ marginTop: "10px" }}>
        Try Again
      </button>
    </div>
  );
}
