import React, { useEffect, useState } from "react";

export default function AdvancedPOC() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 data-testid="advanced-count">Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
        Increment
      </button>

      <h2>Products:</h2>
      <ul data-testid="advanced-products">
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
