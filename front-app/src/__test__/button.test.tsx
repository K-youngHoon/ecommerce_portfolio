import { render, screen } from "@testing-library/react";

// import { Button } from "@src/stories/Button";
// import { Button } from "../stories/Button";

const Button = (props: { label: string }) => {
  return <button type="button">{props.label}</button>;
};

test("Button", () => {
  render(<Button label="test" />);

  screen.getByRole("button");
});
