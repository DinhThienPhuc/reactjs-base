import { render, screen } from "@testing-library/react";

import { LoadingEllipsis } from ".";

test("display LoadingEllipsis success", () => {
  render(<LoadingEllipsis />);
  expect(screen.queryByTestId("loading-ellipsis")).toBeInTheDocument();
});
