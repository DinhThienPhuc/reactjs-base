import { render, screen } from "@testing-library/react";

import { PreAdorment } from ".";

describe("Component PreAdorment", () => {
  it("should show nothing with default props", () => {
    render(<PreAdorment />);
    expect(screen.queryByTestId("pre-adorment")).not.toBeInTheDocument();
  });

  it("should display success with custom props", () => {
    render(<PreAdorment content={<div></div>} />);
    expect(screen.queryByTestId("pre-adorment")).toHaveClass(
      "pre-adorment pre-adorment__standard",
    );
  });
});
