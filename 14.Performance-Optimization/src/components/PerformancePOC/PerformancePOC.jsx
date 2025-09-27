import React, { useState, useMemo, useCallback, Profiler } from "react";

// Example product data
const initialProducts = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Banana", price: 5 },
  { id: 3, name: "Cherry", price: 15 },
  { id: 4, name: "Date", price: 20 },
  { id: 5, name: "Elderberry", price: 25 },
];

export default function PerformancePOC() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  // Filter products using useMemo to avoid unnecessary recalculation
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Shuffle products using useCallback to avoid redefining function on every render
  const shuffleProducts = useCallback(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setProducts(shuffled);
  }, [products]);

  // Profiler callback
  const onRenderCallback = (
    id, // Profiler tree id
    phase, // "mount" or "update"
    actualDuration, // time spent rendering
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(
      `Profiler [${id}] ${phase} - Actual duration: ${actualDuration}ms`
    );
  };

  return (
    <Profiler id="PerformancePOC" onRender={onRenderCallback}>
      <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
        <h2>Performance Optimization POC</h2>

        {/* Search Input */}
        <input
          type="text"
          value={search}
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />

        {/* Shuffle Button */}
        <button onClick={shuffleProducts} style={{ marginLeft: "10px" }}>
          Shuffle Products
        </button>

        {/* Product List */}
        <ul>
          {filteredProducts.map((product) => (
            // Key optimization using stable id
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </Profiler>
  );
}

// Separate component to avoid anonymous functions in render
const ProductItem = React.memo(({ product }) => {
  console.log(`Rendering ProductItem: ${product.name}`);
  return (
    <li style={{ marginBottom: "5px" }}>
      {product.name} - ${product.price}
    </li>
  );
});
