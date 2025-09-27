import { useState, useEffect, useMemo, useContext, createContext } from "react";

// ----- Example Context -----
const UserContext = createContext({ name: "Admin", theme: "light" });

export default function AdvancedProductsPOC({ onBack }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [stockUpdates, setStockUpdates] = useState({});
  const [error, setError] = useState(null);

  const { name, theme } = useContext(UserContext);

  // ----- 1. Basic API fetch on mount -----
  useEffect(() => {
    let isMounted = true;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setProducts(data);
          setFilteredProducts(data);
          // Initialize stock
          const stock = {};
          data.forEach((p) => (stock[p.id] = Math.floor(Math.random() * 100)));
          setStockUpdates(stock);
        }
      })
      .catch((err) => setError("Failed to fetch products"));
    return () => (isMounted = false); // cleanup
  }, []);

  // ----- 2. Filter / search with dependencies -----
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 300); // debounced search
    return () => clearTimeout(timer);
  }, [search, products]);

  // ----- 3. Real-time stock updates (interval + cleanup) -----
  useEffect(() => {
    const interval = setInterval(() => {
      setStockUpdates((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          updated[key] = Math.max(0, updated[key] + (Math.floor(Math.random() * 5) - 2));
        });
        return updated;
      });
    }, 5000); // every 5 sec
    return () => clearInterval(interval);
  }, []);

  // ----- 4. Favorites toggle -----
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ----- 5. Conditional effect: show warning if any stock < 10 -----
  useEffect(() => {
    const lowStock = Object.values(stockUpdates).some((qty) => qty < 10);
    if (lowStock) {
      console.warn("Some products have low stock!");
    }
  }, [stockUpdates]);

  // ----- 6. Memoized value: total inventory -----
  const totalInventory = useMemo(() => {
    return Object.values(stockUpdates).reduce((acc, qty) => acc + qty, 0);
  }, [stockUpdates]);

  return (
    <div style={{ padding: "20px", background: theme === "dark" ? "#333" : "#f5f5f5", color: theme === "dark" ? "#fff" : "#000" }}>
      <button onClick={onBack} style={{ marginBottom: "15px" }}>← Go Back</button>
      <h1>Advanced Products Dashboard</h1>
      <p>User: {name}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Total Inventory: {totalInventory}</p>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {filteredProducts.length === 0 ? (
          <p>No products found!</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", position: "relative" }}>
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
              <p>${product.price}</p>
              <p>Stock: {stockUpdates[product.id]}</p>
              <button
                onClick={() => toggleFavorite(product.id)}
                style={{ position: "absolute", top: "10px", right: "10px", background: favorites[product.id] ? "red" : "#eee" }}
              >
                ♥
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}