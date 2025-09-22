// Import React and Component from the 'react' library
import React, { Component } from "react";

// Define a new Class Component named Syntax that extends Component
class Syntax extends Component {
  // Every class component must have a render() method to return UI
  render() {
    // Return JSX (what should appear on screen)
    return <h1>Hello from Class Component Syntax!</h1>;
  }
}

// Export this component so it can be used in App.jsx
export default Syntax;
