import React from "react";

// Higher-Order Component (HOC)
function withLogger(WrappedComponent) {
  return function LoggerHOC(props) {
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    return <WrappedComponent {...props} />;
  };
}

// Example component to wrap
function Hello({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Wrap the component using HOC
const HelloWithLogger = withLogger(Hello);

export default HelloWithLogger;
