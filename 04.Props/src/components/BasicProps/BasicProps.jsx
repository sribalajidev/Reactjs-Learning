import Child from "./Child";

function BasicProps() {
  // Parent data
  const userName = "User Name";
  const userAge = 25;

  return (
    <div>
      <h2>Basic Props Example</h2>

      {/* Passing props to child component */}
      <Child name={userName} age={userAge} />

      {/* Passing props inline */}
      <Child name="Guest User" age={18} />

      {/* Passing only name, age will be undefined */}
      <Child name="Anonymous" />
    </div>
  );
}

export default BasicProps;