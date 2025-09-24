function Card({ header, body, footer }) {
  return (
    <div style={{ border: "2px solid #333", padding: "10px", margin: "10px" }}>
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
        {/* Render whatever is passed as header */}
        {header}
      </div>
      <div style={{ marginBottom: "5px" }}>
        {/* Render whatever is passed as body */}
        {body}
      </div>
      <div style={{ color: "gray" }}>
        {/* Render whatever is passed as footer */}
        {footer}
      </div>
    </div>
  );
}

export default Card;