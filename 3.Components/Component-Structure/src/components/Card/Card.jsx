// Card.jsx
import Button from "../Button"; // Import Button component
import "./Card.scss";

const Card = ({ title, description, onButtonClick }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {/* Nested Button component */}
      <Button label="Click Me" onClick={onButtonClick} />
    </div>
  );
};

export default Card;
