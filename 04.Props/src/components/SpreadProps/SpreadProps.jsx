import UserCard from "./UserCard";

function SpreadProps() {
  const user1 = { name: "User", age: 25, isMember: true };
  const user2 = { name: "Guest", age: 18, isMember: false };

  return (
    <div>
      <h2>Spread Props Example</h2>

      {/* Pass all object properties as props using spread operator */}
      <UserCard {...user1} />
      <UserCard {...user2} />
    </div>
  );
}

export default SpreadProps;