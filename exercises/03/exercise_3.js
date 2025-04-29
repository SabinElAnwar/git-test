/**
 * TASK:
 * Use forEach() to retrieve advices with a visibility of 4
 */
const getMediumVisibility = (advices) => {
  // Your code goes here:
  const advice = [];

  advices.forEach((element) => {
    if (element.visibility === 4) {
      advice.push(element);
    }
  });

  return advice;
};

// module.exports = getMediumVisibility;

/**
 * TASK:
 * Use filter() to retrieve advices with a visibility of 5
 */
const getHighVisibility = (advices) => {
  // Your code goes here:
  advices.filter((element) => {
    element.visibility == 5;
  });
  return advices;
};

module.exports = { getHighVisibility, getMediumVisibility };

/**
 * ALternative:
 * const onlyVisibilityOfFive = (advice) => advice.visibility === 5;
 *
 * advices.filter(onlyVisibilityOfFive);
 */

/*
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
