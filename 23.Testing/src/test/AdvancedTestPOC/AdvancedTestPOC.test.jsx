import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AdvancedPOC from "../../components/AdvancedPOC/AdvancedPOC";

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Product 1" },
          { id: 2, title: "Product 2" },
          { id: 3, title: "Product 3" },
        ]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("renders all sections correctly", async () => {
  render(<AdvancedPOC />);

  // Wait for fetch to finish
  await waitFor(() => {
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
  });
});
