/**
 * Querying Trees
 * Sometimes, in addition to flat arrays, we need to query trees. Trees pose a
 * challenge because we need to flatten them into arrays in order to apply
 * filter() and map() operations on them.
 */

/**
 * 1. Task:
 * Project and flatten the sections array into an array of advice ids
 */
const withMapAndFlat = (sections) => {
  return sections.flatMap((section) => section.advices).map((s) => s.id);
  // Your code goes here:
};

/**
 * 2. Task:
 * Project and flatten the sections array into an array of advice ids
 */
const withFlatMap = (sections) => {
  // Your code goes here:
};

module.exports = {
  withFlatMap,
  withMapAndFlat,
};

/*
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 */

// Hello World

// button 
