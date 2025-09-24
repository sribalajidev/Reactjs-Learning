function DestructuringProps({ name, age, isMember }) {
  // Props are destructured directly in the function parameter
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Member: {isMember ? "Yes" : "No"}</p>
    </div>
  );
}

export default DestructuringProps;