import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Component to show a single item's details
function ItemDetail() {
  const { id } = useParams();
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}>
      <h3>Item Details</h3>
      <p>You are viewing the details for item ID: {id}</p>
    </div>
  );
}

// Main DynamicRoutes component
export default function DynamicRoutes() {
  // Some example items
  const items = [
    { id: 101, name: "Product 101" },
    { id: 202, name: "Product 202" },
    { id: 303, name: "Product 303" },
  ];

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Dynamic Routes Example</h2>
      <Router>
        <div style={{ marginBottom: "10px" }}>
          <h3>Items</h3>
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/dynamic/${item.id}`}
              style={{
                display: "inline-block",
                marginRight: "10px",
                padding: "5px 10px",
                border: "1px solid #007bff",
                textDecoration: "none",
                color: "#007bff",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Routes>
          {/* Dynamic route */}
          <Route path="/dynamic/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
