import React, { Component } from "react";

class EventHandling extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Binding required if using normal function
    this.handleClick = this.handleClick.bind(this);
  }

  // Normal function (needs binding)
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  // Arrow function (no binding required)
  handleArrowClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Event Handling Example</h2>
        <p>Count: {this.state.count}</p>

        {/* Button using bound function */}
        <button onClick={this.handleClick}>Increment (Bind)</button>

        {/* Button using arrow function */}
        <button onClick={this.handleArrowClick}>Increment (Arrow)</button>
      </div>
    );
  }
}

export default EventHandling;
