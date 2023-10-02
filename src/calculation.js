'use strict';

function getBullsAndCowsCount(randomNumber, userNumber) {
  let bulls = 0;
  let cows = 0;
  const randomNumberStr = randomNumber.toString();

  for (let i = 0; i < randomNumberStr.length; i++) {
    if (randomNumberStr.includes(userNumber[i])
      && randomNumberStr[i] === userNumber[i]) {
      bulls++;
    }

    if (randomNumberStr.includes(userNumber[i])
      && randomNumberStr[i] !== userNumber[i]) {
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
