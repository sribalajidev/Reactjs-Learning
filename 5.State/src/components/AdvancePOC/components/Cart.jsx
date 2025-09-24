import { useEffect } from "react";

export default function Cart({ cart, setCart }) {
  // Save cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cart Items</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.title} - ${item.price}
          <button
            onClick={() => removeItem(item.id)}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
