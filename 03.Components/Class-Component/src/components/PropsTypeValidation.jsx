import React, { Component } from "react";
import PropTypes from "prop-types";

class PropsTypeValidation extends Component {
  render() {
    return (
      <p>
        Name: {this.props.name}, Age: {this.props.age}
      </p>
    );
  }
}

// Prop type validation
PropsTypeValidation.propTypes = {
  name: PropTypes.string.isRequired, // Must be string
  age: PropTypes.number,              // Optional number
};

export default PropsTypeValidation;
