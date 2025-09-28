import React from "react";
import { create } from "zustand";

// 🔹 1. Create a Zustand store
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// 🔹 2. Component using the Zustand store
export default function CounterZustand() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}>
      <h2>Zustand Basic Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
