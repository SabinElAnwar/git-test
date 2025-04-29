const functionChaining = require("./exercise_4");
const advices = require("../../data/advices.json");

describe("Exercise 4", () => {
  test("chain filter and map to collect the id of advices with a visibility of 5", () => {
    expect(functionChaining(advices)).toEqual([70111470, 65432445]);
  });
});
