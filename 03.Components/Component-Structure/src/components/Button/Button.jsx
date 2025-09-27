// Button.jsx
import "./Button.scss"; // Import Sass styles

// Button component receives props: label and onClick
const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
