function UserCard({ name, age, isMember }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Member: {isMember ? "Yes" : "No"}</p>
    </div>
  );
}

export default UserCard;