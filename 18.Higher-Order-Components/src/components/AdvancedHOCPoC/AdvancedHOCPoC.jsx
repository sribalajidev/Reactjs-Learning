import React, { useState, useEffect } from "react";

// HOC to handle API data fetching
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

// HOC to handle search/filtering functionality
function withSearch(WrappedComponent, searchKey) {
  return function ({ data, ...props }) {
    const [query, setQuery] = useState("");
    const filteredData = data.filter((item) =>
      item[searchKey].toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder={`Search by ${searchKey}`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <WrappedComponent data={filteredData} {...props} />
      </div>
    );
  };
}

// Base component to display list of users
function UserList({ data, loading, error }) {
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

// Combine HOCs: fetch data + add search functionality
const EnhancedUserList = withDataFetching(
  withSearch(UserList, "name"),
  "https://jsonplaceholder.typicode.com/users"
);

export default EnhancedUserList;
