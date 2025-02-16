const add = (x: number, y: number) => x + y;

test("add", () => {
  expect(add(1, 2)).toBe(3);
});
