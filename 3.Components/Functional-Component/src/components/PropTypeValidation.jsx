import React from "react";
import PropTypes from "prop-types";

// Functional component
function PropTypeValidation({ name, age }) {
  return (
    <div>
      <h2>PropTypes Validation Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// PropTypes validation
PropTypeValidation.propTypes = {
  name: PropTypes.string.isRequired, // Must be a string
  age: PropTypes.number,              // Optional number
};

export default PropTypeValidation;