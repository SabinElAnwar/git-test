const { getHighVisibility } = require("./exercise_3");
const { getMediumVisibility } = require("./exercise_3");
const advices = require("../../data/advices.json");

describe("Exercise 3", () => {
  test("use forEach to filter advices with a visibility of 4", () => {
    expect(getMediumVisibility(advices)).toEqual([
      {
        id: 654356453,
        sectionId: 4590843,
        title: "Alarmanlagen",
        url: "https://www.welt.de/vergleich/wohnen/alarmanlage-test/",
        image:
          "/vergleich/imgs/Alarmanlage_2-401103766a97213a.jpg/aa95a1e90fd4c97788c3fa2320639b15.jpg",
        date: "2020-04-28T00:00:00.000Z",
        visibility: 4,
      },
    ]);
  });

  test("filter advices with a visibility of 5", () => {
    expect(getHighVisibility(advices)).toEqual([
      {
        id: 70111470,
        sectionId: 4590843,
        title: "Tageslichtlampe",
        url: "https://www.welt.de/vergleich/wohnen/tageslichtlampe-test/",
        image:
          "/vergleich/imgs/./Lampe_3-3244f303df623083.jpg/6c50d2d5cc8d2f58d1f7597292d7f37f.jpg",
        date: "2020-08-10T00:00:00.000Z",
        visibility: 5,
      },
      {
        id: 65432445,
        sectionId: 9374938,
        title: "Körperfettwaage",
        url: "https://www.welt.de/vergleich/gesundheit/koerperfettwaage-test/",
        image:
          "/vergleich/imgs/Koerperfettwaage_2-fade503ad77d1738.jpg/898bf10c191e0339543cf2384755ed58.jpg",
        date: "2020-11-04T00:00:00.000Z",
        visibility: 5,
      },
    ]);
  });
});
