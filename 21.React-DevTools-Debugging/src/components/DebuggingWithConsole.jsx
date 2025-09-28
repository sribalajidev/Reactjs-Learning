import React, { useState, useEffect } from "react";

export default function DebuggingWithConsole() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const increment = () => {
    console.log("Increment button clicked. Previous count:", count);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Component mounted or count changed:", count);
  }, [count]);

  useEffect(() => {
    console.log("Fetching data from fake API...");
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        console.log("Data fetched successfully:", json);
        setData(json);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px 0" }}>
      <h2>Debugging with Console Example</h2>
      
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>

      <h3>API Data:</h3>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}

      <p>Open your browser console to see logs for:</p>
      <ul>
        <li>Button clicks</li>
        <li>State updates</li>
        <li>API fetch success/error</li>
        <li>Component lifecycle logs</li>
      </ul>
    </div>
  );
}
