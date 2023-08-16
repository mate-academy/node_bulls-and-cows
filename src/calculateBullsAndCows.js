'use strict';

function calculateBullsAndCows(num, randomNum) {
  const stringifyNum = num.toString();
  const stringifyRandom = randomNum.toString();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < stringifyNum.length; i++) {
    if (stringifyNum[i] === stringifyRandom[i]) {
      bulls += 1;
    } else if (stringifyRandom.includes(stringifyNum[i])) {
      cows += 1;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  calculateBullsAndCows,
};
