export default function ProductCard({ product, cart, setCart }) {
  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}