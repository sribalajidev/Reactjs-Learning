import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice"; // counter actions
import { fetchProducts } from "../../redux/productsSlice";       // async thunk

export default function Dashboard() {
  const dispatch = useDispatch();

  // counter slice
  const count = useSelector((state) => state.counter.value);

  // products slice
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    // fetch product list when component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Advanced Redux Dashboard</h1>

      {/* Counter Section */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Counter Slice Demo</h2>
        <p>Current Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>

      {/* Products Section */}
      <section>
        <h2>Products from API (Products Slice)</h2>
        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && (
          <ul>
            {products.slice(0, 5).map((product) => (
              <li key={product.id}>
                <strong>{product.title}</strong> — ${product.price}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
