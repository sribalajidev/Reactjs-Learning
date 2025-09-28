import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value); // get value from store
  const dispatch = useDispatch(); // dispatch actions

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Redux Basic Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}
