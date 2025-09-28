import React from "react";

export default function BasicButton({ label = "Click Me", onClick }) {
  return (
    <button onClick={onClick} data-testid="basic-button">
      {label}
    </button>
  );
}