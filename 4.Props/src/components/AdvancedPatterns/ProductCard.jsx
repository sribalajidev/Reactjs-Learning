function ProductCard({ title = "Default Product", price = 100, onBuy, children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "5px"
    }}>
      <h3>{title}</h3>
      <p>Price: ${price}</p>

      {/* Render any extra JSX passed as children */}
      {children}

      {/* Action button using callback */}
      <button onClick={onBuy} style={{ marginTop: "10px" }}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;