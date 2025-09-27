function GuardClausesConditional({ user }) {
  // Guard clause: return early if user data is missing
  if (!user) return <p>No user data available.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default GuardClausesConditional;