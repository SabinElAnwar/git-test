const functionChaining = (advices) => {
  return advices
    .filter((advice) => advice.visibility === 5.0)
    .map((advice) => advice.id);
};

// ALternative:
const onlyVisibilityOfFive = (advice) => advice.visibility === 5;

const getAdviceId = (advice) => advice.id;

advice.filter(onlyVisibilityOfFive).map(getAdviceId);
