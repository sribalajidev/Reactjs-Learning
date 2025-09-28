import React, { useState, useEffect } from "react";

// Simulated API data fetching with potential errors
function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve([
          { id: 1, name: "Laptop" },
          { id: 2, name: "Smartphone" },
          { id: 3, name: "Headphones" },
        ]);
      } else {
        reject(new Error("Failed to fetch products"));
      }
    }, 1000);
  });
}

export default function AdvancedDebugPOC() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
        console.log("Fetched products:", data); // Debug here
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching products:", err); // Debug here
      });
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px 0" }}>
      <h2>Advanced Debugging POC</h2>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id} - {product.name}
          </li>
        ))}
      </ul>
      <p>
        Use React DevTools and browser console to inspect state changes, errors, and props in real
        time. Set breakpoints inside useEffect or callbacks to debug asynchronous flows.
      </p>
    </div>
  );
}
