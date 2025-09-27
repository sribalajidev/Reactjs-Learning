import { useState } from "react";
import useFetch from "../UseFetchHook/useFetch";
import useDebounce from "../UseDebounceHook/useDebounce";
import useToggle from "../UseToggleHook/useToggle";
import useWindowSize from "../UseWindowSizeHook/useWindowSize";

export default function AdvancedPatternsHook() {
  // Toggle for theme
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  // Window size
  const { width, height } = useWindowSize();

  // Search input with debounce
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  // API Fetch
  const { data: products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  // Filtered products safely
  const filteredProducts = (products || []).filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    width: "150px",
    borderRadius: "5px",
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: isDarkMode ? "#222" : "#f9f9f9",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <h2>Advanced Patterns Hook POC</h2>

      {/* Theme toggle */}
      <button onClick={toggleDarkMode} style={{ marginBottom: "10px" }}>
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>

      {/* Window size display */}
      <p>
        Window Size: {width || 0}px x {height || 0}px
      </p>

      {/* Search input */}
      <input
        type="text"
        value={search}
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />

      {/* Product list */}
      {loading && <p>Loading products...</p>}
      {error && <p>Error fetching products!</p>}
      {!loading && !error && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} style={cardStyle}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "100px", objectFit: "contain" }}
                />
                <p style={{ fontSize: "12px" }}>{product.title}</p>
                <p>${product.price}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
