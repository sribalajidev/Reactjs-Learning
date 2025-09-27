import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Component to display product details using route params
function ProductDetail() {
  // useParams lets us grab the dynamic segment from the URL
  const { id } = useParams();

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}>
      <h3>Product Details</h3>
      <p>You are viewing details for product ID: <strong>{id}</strong></p>
    </div>
  );
}

// Main component
export default function RouteParams() {
  return (
    <Router>
      <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
        <h2>Route Params Example</h2>

        {/* Links with dynamic params */}
        <nav style={{ marginBottom: "10px" }}>
          <Link to="/product/1" style={{ marginRight: "10px" }}>Product 1</Link>
          <Link to="/product/2" style={{ marginRight: "10px" }}>Product 2</Link>
          <Link to="/product/3">Product 3</Link>
        </nav>

        {/* Define route with dynamic param */}
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
