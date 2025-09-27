import ProductItem from "./ProductItem";

export default function RenderingListsWithComponents() {
  const products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Tablet", price: 20000 },
  ];

  return (
    <div>
      <h2>Rendering Lists with Components Example</h2>

      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
