import React, { Component } from "react";

class DefaultProps extends Component {
  render() {
    return <h2>Hello, {this.props.name}!</h2>;
  }
}

// Default value for props if not provided
DefaultProps.defaultProps = {
  name: "Guest",
};

export default DefaultProps;
