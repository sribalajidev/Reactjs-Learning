import React, { useEffect, useState } from "react";

export default function APIDataFetching() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://fakestoreapi.com/products", {
          signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    // Cleanup: abort fetch on unmount
    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>API Data Fetching Example</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} – ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
