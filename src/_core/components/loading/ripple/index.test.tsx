import { render, screen } from "@testing-library/react";

import { LoadingRipple } from ".";

describe("Component Loading Ripple", () => {
  it("should display success with default props", () => {
    render(<LoadingRipple />);
    expect(screen.queryByTestId("loading-ripple")).toHaveClass(
      "loading-ripple-size__80 loading-ripple-color__#00bfff loading-ripple-size-unit__px",
    );
  });
});
