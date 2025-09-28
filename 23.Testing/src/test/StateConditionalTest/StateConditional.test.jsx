import React from "react";
import { render, screen } from "@testing-library/react";
import ConditionalRender from "../../components/ConditionalRender/ConditionalRender";

describe("ConditionalRender Component", () => {
  test("shows/hides content based on 'show' prop", () => {
    const { rerender } = render(<ConditionalRender show={true} />);

    // The text content rendered when show=true
    expect(screen.getByText(/You can see me!/i)).toBeInTheDocument();
    expect(screen.queryByText(/You can't see me!/i)).not.toBeInTheDocument();

    // Re-render with show=false
    rerender(<ConditionalRender show={false} />);
    expect(screen.queryByText(/You can see me!/i)).not.toBeInTheDocument();
    expect(screen.getByText(/You can't see me!/i)).toBeInTheDocument();
  });
});
