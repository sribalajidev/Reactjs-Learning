import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackUI from "../ErrorFallbackUI/ErrorFallbackUI";

// Component that fetches data from an API
function FetchDataComponent({ triggerError }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (triggerError) {
      throw new Error("API fetch error triggered!");
    }

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => {
        throw new Error("Failed to fetch API data");
      });
  }, [triggerError]);

  if (!data) return <p>Loading data...</p>;

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {data.slice(0, 5).map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "150px",
            borderRadius: "5px",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "100px", objectFit: "contain" }}
          />
          <p style={{ fontSize: "12px" }}>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default function ErrorBoundaryWithAPI() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Error Boundary with API Example</h2>

      <ErrorBoundary
        FallbackComponent={ErrorFallbackUI}
        onReset={() => console.log("Reset after error")}
      >
        {/* Pass triggerError=true to simulate API error */}
        <FetchDataComponent triggerError={false} />
      </ErrorBoundary>
    </div>
  );
}
