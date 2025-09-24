import PropTypes from 'prop-types';

function PropTypesValidation({ name, age, isMember }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Member: {isMember ? "Yes" : "No"}</p>
    </div>
  );
}

// Define prop types
PropTypesValidation.propTypes = {
  name: PropTypes.string.isRequired,  // must be string, required
  age: PropTypes.number,              // optional number
  isMember: PropTypes.bool            // optional boolean
};

// Default values (optional)
PropTypesValidation.defaultProps = {
  age: 18,
  isMember: false
};

export default PropTypesValidation;