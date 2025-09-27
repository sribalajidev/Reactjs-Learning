import useWindowSize from "./useWindowSize";

export default function UseWindowSizeHook() {
  const { width, height } = useWindowSize();

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Use Window Size Hook</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      {width < 768 ? (
        <p>Viewport is in Mobile Mode</p>
      ) : (
        <p>Viewport is in Desktop Mode</p>
      )}
    </div>
  );
}
