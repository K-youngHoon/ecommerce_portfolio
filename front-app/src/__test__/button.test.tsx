import { render, screen, fireEvent } from "@testing-library/react";
import * as ButtonStories from "@src/components/ui/Buttom.stroies";
import { composeStories } from "@storybook/react";
const { Primary, Secondary } = composeStories(ButtonStories);

describe("Button Component", () => {
  test("renders Primary button", () => {
    render(<Primary />);
    expect(screen.getByText("Primary Button")).toBeInTheDocument();
  });

  test("renders Secondary button", () => {
    render(<Secondary />);
    expect(screen.getByText("Secondary Button")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Primary onClick={handleClick} />);
    fireEvent.click(screen.getByText("Primary Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders button with emoji", () => {
    render(<Primary children="🚀 Click me" />);
    expect(screen.getByText("🚀 Click me")).toBeInTheDocument();
  });
});
