import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BasicButton from "../../components/BasicButton/BasicButton";

// Describe the test suite
describe("BasicButton Component", () => {
  test("renders button with correct text", () => {
    render(<BasicButton label="Click Me" />);
    
    // Check if button is in the document
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick function when clicked", () => {
    const handleClick = jest.fn(); // mock function
    render(<BasicButton label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    // Check if mock function was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
