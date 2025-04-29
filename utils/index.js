const stringToSlug = function (str) {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();

  let from = ["ä", "ö", "ü"];
  let to = ["ae", "oe", "ue"];
  for (let key in from) {
    str = str.replace(new RegExp(from[key], "g"), to[key]);
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return str;
};

const wrap = (fn) => [fn];

module.exports = {
  wrap,
  stringToSlug,
};
