import { useEffect, useState } from "react";

export default function ErrorHandlingEffect() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // This URL is intentionally incorrect to demonstrate error handling
        const response = await fetch("https://fakestoreapi.com/non-existing-endpoint"); // correct url: https://fakestoreapi.com/products
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null); // clear any old error
      } catch (err) {
        setError(err.message);
        setData(null); // clear any old data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // run once on mount

  return (
    <div style={{ padding: "20px" }}>
      <h2>Error Handling in useEffect</h2>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}