const toSlug = (categories) => {
  const slugCategories = [];

  categories.forEach((category) => slugCategories.push(stringToSlug(category)));

  return slugCategories;
};
