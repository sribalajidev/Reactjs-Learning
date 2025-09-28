import React, { useState, useEffect } from "react";

// Higher-Order Component that fetches data from API
function withDataFetching(WrappedComponent, url) {
  return function () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [url]);

    return <WrappedComponent data={data} loading={loading} error={error} />;
  };
}

// Component to display fetched data
function UserList({ data, loading, error }) {
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Export HOC-enhanced component
export default withDataFetching(UserList, "https://jsonplaceholder.typicode.com/users");
