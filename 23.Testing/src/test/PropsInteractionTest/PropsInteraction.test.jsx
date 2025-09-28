import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IntegrationDemo from "../../components/IntegrationDemo/IntegrationDemo";

describe("IntegrationDemo Component", () => {
  test("renders count and buttons", () => {
    render(<IntegrationDemo />);

    // Check that the count element is rendered
    const countEl = screen.getByTestId("integration-count");
    expect(countEl).toBeInTheDocument();
    expect(countEl.textContent).toBe("0"); // initial count

    // Check that buttons are rendered
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Subtract")).toBeInTheDocument();
  });

  test("increments and decrements count on button clicks", () => {
    render(<IntegrationDemo />);

    const countEl = screen.getByTestId("integration-count");
    const addButton = screen.getByText("Add");
    const subtractButton = screen.getByText("Subtract");

    // Initial count
    expect(countEl.textContent).toBe("0");

    // Click Add button
    fireEvent.click(addButton);
    expect(countEl.textContent).toBe("1");

    // Click Subtract button
    fireEvent.click(subtractButton);
    expect(countEl.textContent).toBe("0");
  });
});
