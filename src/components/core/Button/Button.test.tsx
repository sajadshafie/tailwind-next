import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button unit test", () => {
  test("testing content is string", () => {
    const { getByText } = render(<Button>testing</Button>);
    expect(getByText("testing")).toBeInTheDocument();
  });
  test("testing content is ReactNode", () => {
    const { getByTestId } = render(
      <Button>
        <div data-testid="children">testing</div>
      </Button>
    );
    expect(getByTestId("children")).toBeInTheDocument();
  });
});
