function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
      width: '200px',
    }}>
      {children} {/* Render whatever JSX is passed from parent */}
    </div>
  );
}

export default Card;