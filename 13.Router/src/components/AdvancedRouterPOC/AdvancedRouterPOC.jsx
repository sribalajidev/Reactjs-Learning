import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useParams,
} from "react-router-dom";

// --- Fake Auth Function ---
const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  logout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// --- Protected Route Component ---
function ProtectedRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/login" />;
}

// --- Layout Component ---
function DashboardLayout() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h2>Dashboard Layout</h2>
      <nav style={{ marginBottom: "10px" }}>
        <Link to="products" style={{ marginRight: "10px" }}>Products</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <button onClick={() => fakeAuth.logout(() => window.location.reload())}>
        Logout
      </button>
      <Outlet />
    </div>
  );
}

// --- Pages ---
function Login() {
  const [redirect, setRedirect] = useState(false);

  const handleLogin = () => {
    fakeAuth.login(() => setRedirect(true));
  };

  if (redirect) return <Navigate to="/dashboard" />;

  return (
    <div style={{ padding: "20px" }}>
      <h3>Login Page</h3>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Profile() {
  return <h3>User Profile Page</h3>;
}

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products!</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`${product.id}`}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "150px",
            textDecoration: "none",
            color: "#000",
            borderRadius: "5px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "100px", objectFit: "contain" }}
          />
          <p style={{ fontSize: "12px" }}>{product.title}</p>
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

// --- Main Component ---
export default function AdvancedRouterPOC() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<h3>Welcome to Dashboard!</h3>} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
