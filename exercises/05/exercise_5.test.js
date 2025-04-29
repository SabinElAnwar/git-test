const { withMapAndFlat, withFlatMap } = require("./exercise_5");
const sections = require("../../data/sections.json");

describe("Exercise 5", () => {
  test("project and flatten the section with map and flat", () => {
    expect(withMapAndFlat(sections)).toEqual([
      7011147043,
      9582398234,
      6238947239,
      3554829938,
    ]);
  });

  test("project and flatten the sections with flatMap()", () => {
    expect(withFlatMap(sections)).toEqual([
      7011147043,
      9582398234,
      6238947239,
      3554829938,
    ]);
  });
});
