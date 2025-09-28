import React, { useState, useEffect } from "react";

// Reusable Fetcher component using Render Props
function FetchProducts({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return children({ products, loading, error });
}

// Advanced dashboard using Render Props
export default function AdvancedRenderPropsPOC() {
  const [search, setSearch] = useState("");

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Advanced Render Props POC - Product Dashboard</h2>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
      />

      <FetchProducts>
        {({ products, loading, error }) => {
          if (loading) return <p>Loading products...</p>;
          if (error) return <p>Error: {error}</p>;

          const filtered = products.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          );

          return (
            <ul>
              {filtered.map((product) => (
                <li key={product.id}>
                  {product.title} - ${product.price}
                </li>
              ))}
            </ul>
          );
        }}
      </FetchProducts>
    </div>
  );
}
