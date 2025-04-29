const { toSlug, toInt, toAdviceTuple } = require("./exercise_2");
const advices = require("../../data/advices.json");
const categories = require("../../data/categories.json");

describe("Exercise 2", () => {
  test("create clean version of categories with map()", () => {
    expect(toSlug(categories)).toEqual([
      "uebersicht",
      "elektronik",
      "wohnen",
      "kueche",
      "familie",
      "haushalt",
      "koerperpflege",
    ]);
  });

  test("strings to int", () => {
    expect(toInt(["1.0", "2.0", "3.0"])).toEqual([1, NaN, NaN]);
  });

  test("project advices to a pair of id and name", () => {
    expect(toAdviceTuple(advices)).toEqual([
      { id: 70111470, title: "Tageslichtlampe" },
      { id: 654356453, title: "Alarmanlagen" },
      { id: 65432445, title: "Körperfettwaage" },
      { id: 675465, title: "Crosstrainer" },
    ]);
  });
});
