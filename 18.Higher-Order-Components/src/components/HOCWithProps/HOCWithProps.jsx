import React from "react";

// Higher-Order Component that injects extra props
function withExtraProps(WrappedComponent, extraProps) {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} {...extraProps} />;
  };
}

// Example component
function UserCard({ name, role }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}

// Wrap the component and provide extra props
const UserCardWithRole = withExtraProps(UserCard, { role: "Admin" });

export default UserCardWithRole;
