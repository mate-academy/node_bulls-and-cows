'use strict';

const countCowsAndBulls = (randonNumber, questNumber) => {
  const result = {
    cows: 0,
    bulls: 0,
  };

  for (let i = 0; i < 4; i++) {
    if (randonNumber[i] === questNumber[i]) {
      result.bulls++;
    } else if (randonNumber.includes(questNumber[i])) {
      result.cows++;
    }
  }

  return result;
};

module.exports = {
  countCowsAndBulls,
};
