import { render, screen } from "@testing-library/react";
import React from "react";

import { Button } from "@src/stories/Button";
// import { Button } from "../stories/Button";

const add = (x: number, y: number) => x + y;

// const Button = (props: { label: string }) => {
//   return <button type="button">{props.label}</button>;
// };

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("Button", () => {
  render(<Button label="test" />);

  screen.getByRole("button");
});
