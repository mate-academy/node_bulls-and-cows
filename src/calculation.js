'use strict';

function getBullsAndCowsCount(randomNumber, userNumber) {
  let bulls = 0;
  let cows = 0;
  const randomNumberStr = randomNumber.toString();

  for (let i = 0; i < randomNumberStr.length; i++) {
    const isNumberIncluded = randomNumberStr.includes(userNumber[i]);

    if (isNumberIncluded && randomNumberStr[i] === userNumber[i]) {
      bulls++;
    }

    if (isNumberIncluded && randomNumberStr[i] !== userNumber[i]) {
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
