// UseReducerState.jsx
import { useReducer } from "react";

// Initial state
const initialState = { count: 0 };

// Reducer function to handle actions
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducerState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>useReducer State Example</h2>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
