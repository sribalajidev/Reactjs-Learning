import React from "react";

// Child component
function Child({ message }) {
  return <p>Child says: {message}</p>;
}

// Parent component
function NestedComponents() {
  const msg = "Hello from Parent!";
  return (
    <div>
      <h2>Nested Components Example</h2>
      {/* Include Child component inside Parent */}
      <Child message={msg} />
      <Child message="Another message to child!" />
    </div>
  );
}

export default NestedComponents;
