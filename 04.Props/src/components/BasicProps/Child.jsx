function Child({ name, age }) {
  return (
    <p>
      Name: {name}, Age: {age ? age : 'N/A'} {/* If age not provided, show N/A */}
    </p>
  );
}

export default Child;