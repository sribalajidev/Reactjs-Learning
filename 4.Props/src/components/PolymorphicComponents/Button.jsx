function Button({ as: Component = "button", children, ...props }) {
  // `Component` defaults to 'button' if `as` prop not provided
  // ...props passes all other props to rendered element
  return (
    <Component
      {...props}
      style={{
        padding: "8px 16px",
        backgroundColor: "teal",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        textDecoration: "none",
        display: "inline-block",
        marginRight: "10px"
      }}
    >
      {children}
    </Component>
  );
}

export default Button;