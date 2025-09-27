import { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ThemeToggle from "./components/ThemeToggle";
import { fetchProducts } from "./utils/api";

// Create context for theme
export const ThemeContext = createContext();

export default function AppPOC() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`appPOC ${theme}`}>
        <Header cart={cart} />
        <ThemeToggle />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="product-grid">
          {products
            .filter((p) =>
              p.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </ThemeContext.Provider>
  );
}
