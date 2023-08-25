'use strict';

const getBullsAndCows = (programNumber, userNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < programNumber.length; i++) {
    if (userNumber[i] === programNumber[i]) {
      bulls++;
    } else if (programNumber.includes(userNumber[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = getBullsAndCows;
