import { useState } from "react";
import Child from "./child";

function CallbackProps() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count => count + 1);
  };
  return (
    <>
      <h2>Callback Props Example</h2>
      <p>Parent Counter: {count}</p>

      {/* Pass Function as props to child */}
      <Child onIncrement={handleIncrement} />
    </>
  );
}

export default CallbackProps;