import firstDegree from "./firstDegree";

describe("First Degree", () => {
  it.each`
    y     | a    | b    | expected
    ${20} | ${3} | ${5} | ${5}
  `("should return value of x", ({ y, a, b, expected }) => {
    expect(firstDegree(y, a, b)).toBe(expected);
  });
});
