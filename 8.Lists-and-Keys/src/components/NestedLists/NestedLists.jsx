export default function NestedLists() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      items: ["Laptop", "Phone", "Tablet"],
    },
    {
      id: 2,
      name: "Fashion",
      items: ["Shirts", "Jeans", "Shoes"],
    },
    {
      id: 3,
      name: "Home",
      items: ["Sofa", "Table", "Chair"],
    },
  ];

  return (
    <div>
      <h2>Nested Lists Example</h2>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <strong>{category.name}</strong>
            <ul>
              {category.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
