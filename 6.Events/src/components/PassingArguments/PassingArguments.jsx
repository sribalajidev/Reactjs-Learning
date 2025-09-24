function PassingArguments() {
  // Function to handle click with argument
  const handleClick = (name) => {
    alert(`Hello, ${name}! Button clicked.`);
  };

  // Function to handle delete with ID
  const handleDelete = (id, e) => {
    e.preventDefault(); // Prevent default action (if needed)
    alert(`Deleted item with ID: ${id}`);
  };

  return (
    <div>
      <h2>Passing Arguments to Event Handlers</h2>

      {/* Passing a simple argument */}
      <button onClick={() => handleClick("User")}>
        Say Hello
      </button>

      {/* Passing multiple arguments */}
      <button onClick={(e) => handleDelete(101, e)}>Delete Item 101</button>

      {/* Passing event only */}
      <button onClick={(e) => alert("Button clicked!", e)}>
        Just Log Event
      </button>
    </div>
  );
}

export default PassingArguments;
