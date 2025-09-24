import ProductCard from "./ProductCard";

function AdvancedPatterns() {
  // Dynamic props example
  const product1 = { title: "Laptop", price: 1199 };
  const product2 = { title: "Mobile", price: 899 };

  // Callback props example
  const handleBuy = (product) => {
    alert(`Purchased: ${product.title} for $${product.price}`);
  }
  return (
    <>
      <h2>Advanced Props Patterns Example</h2>
      
      {/* Using spread props, children, callback & defaultProps */}
      <ProductCard {...product1} onBuy={() => handleBuy(product1)}>
        <p>Special Offer: Free shipping!</p>
      </ProductCard>
      <ProductCard {...product2} onBuy={() => handleBuy(product2)}>
        <p>Special Offer: 10% off on your first purchase!</p>
      </ProductCard>

      {/* No data passed — default props will be used */}
      <ProductCard onBuy={() => alert("Purchased default product")} />
    </>
  );
}

export default AdvancedPatterns;