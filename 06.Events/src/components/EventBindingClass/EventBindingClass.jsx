import React, { Component } from "react";

class EventBindingClass extends Component {
  // ✅ Option 1: Bind in constructor
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from constructor binding",
    };
    this.handleClick = this.handleClick.bind(this); // binding here
  }

  handleClick() {
    this.setState({ message: "Button clicked using constructor binding!" });
  }

  // ✅ Option 2: Class field with arrow function (auto binds)
  handleArrowClick = () => {
    this.setState({ message: "Button clicked using arrow function!" });
  };

  render() {
    return (
      <div>
        <h2>Event Binding in Class Component</h2>
        <p>{this.state.message}</p>

        {/* Bound in constructor */}
        <button onClick={this.handleClick}>
          Click Me (Constructor Binding)
        </button>

        {/* Auto bound with arrow function */}
        <button onClick={this.handleArrowClick} style={{ marginLeft: "10px" }}>
          Click Me (Arrow Function)
        </button>

        {/* Inline arrow function */}
        <button
          onClick={() =>
            this.setState({ message: "Clicked using inline arrow function!" })
          }
          style={{ marginLeft: "10px" }}
        >
          Click Me (Inline Arrow)
        </button>
      </div>
    );
  }
}

export default EventBindingClass;
