const toSlug = require("./exercise_1");
const categories = require("../../data/categories.json");

describe("Exercide: 1", () => {
  test("create a clean version of categories with forEach()", () => {
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
});
