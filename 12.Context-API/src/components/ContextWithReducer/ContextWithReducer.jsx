import React, { createContext, useReducer, useContext } from "react";

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

// Create context
const CounterContext = createContext();

// Child component to consume context
function CounterControls() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>Counter: {state.count}</h3>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  );
}

export default function ContextWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div>
        <h2>Context with Reducer Example</h2>
        <CounterControls />
      </div>
    </CounterContext.Provider>
  );
}
