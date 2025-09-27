import { useEffect, useState } from "react";

export default function MultipleEffects() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [posts, setPosts] = useState([]);

  // Effect 1: Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup timer
    return () => clearInterval(timer);
  }, []);

  // Effect 2: Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect 3: Fetch data from an API (example posts)
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Multiple Effects Example</h2>

      <p><strong>Current Time:</strong> {time}</p>
      <p><strong>Window Width:</strong> {windowWidth}px</p>

      <h3>Posts (Fetched from API):</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
