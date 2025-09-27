import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";

// Component to display query params
function SearchResults() {
  // Hook to get query params
  const [searchParams] = useSearchParams();

  // Read specific query params
  const keyword = searchParams.get("q");
  const category = searchParams.get("category");

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}>
      <h3>Search Results</h3>
      {keyword ? (
        <p>
          Showing results for <strong>{keyword}</strong>
          {category && (
            <>
              {" "}
              in category <strong>{category}</strong>
            </>
          )}
        </p>
      ) : (
        <p>No search query provided.</p>
      )}
    </div>
  );
}

// Main component
export default function QueryParams() {
  return (
    <Router>
      <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
        <h2>Query Params Example</h2>

        {/* Example Links with Query Params */}
        <nav style={{ marginBottom: "10px" }}>
          <Link to="/search?q=react&category=frontend" style={{ marginRight: "10px" }}>
            React Frontend
          </Link>
          <Link to="/search?q=node&category=backend" style={{ marginRight: "10px" }}>
            Node Backend
          </Link>
          <Link to="/search?q=design">Design</Link>
        </nav>

        {/* Route for search results */}
        <Routes>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}
