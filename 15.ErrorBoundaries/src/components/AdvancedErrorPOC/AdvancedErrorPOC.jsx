import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackUI from "../ErrorFallbackUI/ErrorFallbackUI";

// Simulated Product Card Component
function ProductCard({ product }) {
  if (!product) throw new Error("Product data missing!");
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "150px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "100px", objectFit: "contain" }}
      />
      <p style={{ fontSize: "12px" }}>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
}

// Fetch Products Component
function ProductsList({ triggerError }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (triggerError) {
      throw new Error("Simulated API failure!");
    }

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)))
      .catch(() => {
        throw new Error("Failed to fetch products");
      });
  }, [triggerError]);

  if (!products) return <p>Loading products...</p>;

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ErrorBoundary key={product.id} FallbackComponent={ErrorFallbackUI}>
          <ProductCard product={product} />
        </ErrorBoundary>
      ))}
    </div>
  );
}

// Advanced POC Component
export default function AdvancedErrorPOC() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Advanced Error Boundary POC</h2>

      {/* Top-level ErrorBoundary */}
      <ErrorBoundary
        FallbackComponent={ErrorFallbackUI}
        onReset={() => console.log("Reset triggered at top-level")}
      >
        {/* Trigger error by setting triggerError=true */}
        <ProductsList triggerError={false} />
      </ErrorBoundary>
    </div>
  );
}
