import React from "react";

function DefaultProps({ name = "Guest", age = 18 }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default DefaultProps;
