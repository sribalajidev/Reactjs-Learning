import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const ProductContext = createContext();

// Child component to consume context
function ProductList() {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products!</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "150px",
            borderRadius: "5px",
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
      ))}
    </div>
  );
}

export default function ContextWithAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      <div>
        <h2>Context with API Example</h2>
        <ProductList />
      </div>
    </ProductContext.Provider>
  );
}
