'use strict';

function getBullsAndCowsCount(randomNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < randomNumber.length; i++) {
    const hasNumberIncluded = randomNumber.includes(userNumber[i]);

    if (hasNumberIncluded && randomNumber[i] === userNumber[i]) {
      bulls++;
    }

    if (hasNumberIncluded && randomNumber[i] !== userNumber[i]) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  getBullsAndCowsCount,
};
