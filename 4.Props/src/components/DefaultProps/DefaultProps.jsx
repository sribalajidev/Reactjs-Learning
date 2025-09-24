function DefaultProps({ name = "Guest", age = 18 }) {
  // Using ES6 default values in destructuring
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default DefaultProps;