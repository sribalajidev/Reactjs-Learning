import React from "react";

export default function ConditionalRender({ show }) {
  return (
    <div>
      <button data-testid="toggle-btn">Toggle</button>
      {show && <p data-testid="visible-text">You can see me!</p>}
      {!show && <p data-testid="hidden-text">You can't see me!</p>}
    </div>
  );
}
