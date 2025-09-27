import { useState, useMemo } from "react";

// Child component for each product card
function ProductCard({ product, onToggleFavorite }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "6px",
      }}
    >
      <h3>
        {product.name} – ₹{product.price}
      </h3>
      <p>Category: {product.category}</p>

      <button onClick={() => onToggleFavorite(product.id)}>
        {product.isFavorite ? "★ Favorite" : "☆ Add to Favorites"}
      </button>

      {/* Example nested list: show available colors */}
      <ul>
        {product.colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AdvancedListPatterns() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 75000,
      category: "Electronics",
      isFavorite: false,
      colors: ["Black", "Silver", "Grey"],
    },
    {
      id: 2,
      name: "Phone",
      price: 30000,
      category: "Electronics",
      isFavorite: false,
      colors: ["Blue", "White", "Black"],
    },
    {
      id: 3,
      name: "Chair",
      price: 5000,
      category: "Furniture",
      isFavorite: false,
      colors: ["Brown", "Beige"],
    },
  ]);

  const [search, setSearch] = useState("");

  // Filtering logic (performance tip: use useMemo)
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  // Add a new product dynamically
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "Table",
      price: 6000,
      category: "Furniture",
      isFavorite: false,
      colors: ["Dark Brown", "Light Brown"],
    };
    setProducts([...products, newProduct]);
  };

  // Toggle favorite status of a product
  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  return (
    <div>
      <h2>Advanced List Patterns</h2>
      <p>
        This combines: basic lists, dynamic lists, key props, filtering, nested lists, rendering with components, and performance optimization.
      </p>

      {/* Search bar for filtering */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "15px", display: "block" }}
      />

      {/* Add new product */}
      <button onClick={addProduct} style={{ marginBottom: "15px" }}>
        Add New Product
      </button>

      {/* Render product list */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>No products found.</p>
        )}
      </div>
    </div>
  );
}
