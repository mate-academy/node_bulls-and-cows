'use strict';

const calculateBullsAndCows = (userCombination, winCombination) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userCombination.length; i += 1) {
    if (userCombination[i] === winCombination[i]) {
      bulls += 1;
    } else if (winCombination.includes(userCombination[i])) {
      cows += 1;
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = {
  calculateBullsAndCows,
};
