import React, { useState, useEffect } from "react";

function EffectsAPI() {
  // State to store API data
  const [products, setProducts] = useState([]);

  // useEffect to fetch API data on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Take only first 4 items
        setProducts(data.slice(0, 4));
      })
      .catch((err) => console.error(err));
  }, []); // [] empty dependency array => runs once on mount

  return (
    <div>
      <h2>Top 4 Products from FakeStore API</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EffectsAPI;
