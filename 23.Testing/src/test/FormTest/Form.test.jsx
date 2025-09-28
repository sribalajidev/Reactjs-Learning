import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../../components/LoginForm/LoginForm";

test("renders form fields correctly", () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText(/Email/i); // fixed
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const submitButton = screen.getByRole("button", { name: /Login/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("allows user to type into inputs", () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);

  fireEvent.change(emailInput, { target: { value: "user@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });

  expect(emailInput.value).toBe("user@test.com");
  expect(passwordInput.value).toBe("password");
});

test("shows validation messages if fields are empty", () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);

  const submitButton = screen.getByRole("button", { name: /Login/i });
  fireEvent.click(submitButton);

  expect(mockSubmit).not.toHaveBeenCalled(); // optional
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
});

test("calls onSubmit with input values when form is valid", () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const emailInput = screen.getByPlaceholderText(/Email/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const submitButton = screen.getByRole("button", { name: /Login/i });

  fireEvent.change(emailInput, { target: { value: "user@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    email: "user@test.com",
    password: "password",
  });
});
