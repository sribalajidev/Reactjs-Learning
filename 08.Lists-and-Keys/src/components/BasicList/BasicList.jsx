export default function BasicList() {
  // 1. Sample array of items
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <div>
      <h2>Basic List Example</h2>

      {/* 2. Rendering list using map */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // key prop is important for list rendering
        ))}
      </ul>
    </div>
  );
}