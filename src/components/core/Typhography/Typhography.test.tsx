import { render, screen } from "@testing-library/react";
import Typography from ".";
describe("testing Typography", () => {
  test("testing have text content", () => {
    render(<Typography data-testid="typography-id">test</Typography>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
