import { render, screen } from "@testing-library/react";
import Link from ".";

describe("unit testing Link", () => {
  test("test children is string", () => {
    const { getByText } = render(<Link href={""}>testing</Link>);
    expect(getByText("testing")).toBeInTheDocument();
  });
  test("test children is ReactNode", () => {
    const { getByTestId } = render(
      <Link href={""}>
        <div data-testid="children"></div>
      </Link>
    );
    expect(getByTestId("children")).toBeInTheDocument();
  });
  test("testing Link have href", () => {
    const { getByTestId } = render(
      <Link href={"http://www.google.com"}>testing</Link>
    );
    expect(getByTestId("link-core")).toHaveAttribute(
      "href",
      "http://www.google.com"
    );
  });
});
