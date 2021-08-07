import sub from "./sub";

it.each`
  a     | b    | expected
  ${3}  | ${2} | ${1}
  ${10} | ${5} | ${5}
`("should sub the numbers", ({ a, b, expected }) => {
  expect(sub(a, b)).toBe(expected);
});
