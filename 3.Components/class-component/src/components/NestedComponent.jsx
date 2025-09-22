import React, { Component } from "react";

// Child Component
class Child extends Component {
  render() {
    return <p>Child says: Hello {this.props.name}</p>;
  }
}

// Parent Component
class NestedComponent extends Component {
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        {/* Nested Child Component */}
        <Child name="Sri" />
      </div>
    );
  }
}

export default NestedComponent;
