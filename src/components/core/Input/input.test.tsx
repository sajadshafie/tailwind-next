import { render, screen } from "@testing-library/react";
import { Input } from "@/components/core";

describe("input testing", () => {
  test("testing have placeholder", () => {
    const placeholder = "placeholder testing";
    const { getByPlaceholderText } = render(
      <Input data-testid="input-core" placeholder={placeholder} />
    );

    expect(getByPlaceholderText("placeholder testing")).toBeDefined();
  });
  test("passed value", () => {
    render(<Input data-testid="input-core" value={"test"} />);
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  });
  test("have icon search", () => {
    const { getByTestId } = render(
      <Input data-testid="input-core" value={"test"} icon />
    );
    expect(getByTestId("icon-search")).toBeInTheDocument();
  });
});
