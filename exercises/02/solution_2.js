/**
 * 1. TASK:
 */
const toSlug = (categories) => {
  return categories.map((category) => stringToSlug(category));

  // OR, just shorter

  // return categories.map(stringToSlug);
};

/**
 * 2. TASK:
 */
const toInt = (arrayOfStrings) => {
  return arrayOfStrings.map(parseInt);
};

/**
 * 3. TASK:
 */
const toAdviceTuple = (advices) => {
  return advices.map((advice) => ({
    id: advice.id,
    title: advice.title,
  }));
};
