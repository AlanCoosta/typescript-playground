import sum from "./sum";

it.each`
  a    | b    | expected
  ${1} | ${2} | ${3}
  ${2} | ${3} | ${5}
`("should sum the numbers", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
