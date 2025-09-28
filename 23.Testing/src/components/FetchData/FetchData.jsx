import React, { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch");
        setLoading(false);
      });
  }, []);

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul data-testid="product-list">
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
