export default function ProductItem({ product }) {
  return (
    <li>
      <strong>{product.name}</strong> – ₹{product.price}
    </li>
  );
}