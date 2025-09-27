import React from "react";

// Functional component receiving props as argument
function Props({ name, age }) {
  // JSX to render using props
  return (
    <div>
      <h2>Props Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Export component to use elsewhere
export default Props;
