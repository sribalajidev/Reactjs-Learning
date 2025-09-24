export default function Header({ cart }) {
  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h1>Advance POC Shop</h1>
      <p>Cart Items: {cart.length}</p>
    </header>
  );
}
