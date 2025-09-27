import { useState } from "react";

export default function ListFiltering() {
  // Initial list of products
  const [products] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Headphones" },
  ]);

  // Search query state
  const [query, setQuery] = useState("");

  // Filter products by query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>List Filtering Example</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
