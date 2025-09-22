import React, { Component } from "react";

class PropsState extends Component {
  // Constructor runs once when the component is created
  constructor(props) {
    // super(props) lets us access props inside the constructor
    super(props);

    // State initialized with a count of 0
    this.state = { count: 0 };
  }

  // Custom method to update state
  increment = () => {
    // Use setState to update count
    this.setState({ count: this.state.count + 1 });
  };

  // Render method outputs JSX
  render() {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
        {/* Accessing the prop passed from App.jsx */}
        <h2>{this.props.name}'s Counter</h2>

        {/* Accessing the component's internal state */}
        <p>Count: {this.state.count}</p>

        {/* Button to update state */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default PropsState;
