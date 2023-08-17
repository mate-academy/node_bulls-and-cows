'use strict';

function calculateBullsAndCows(hiddenNumber, guessNumber) {
  let bulls = 0;
  let cows = 0;

  for (const num in hiddenNumber) {
    if (hiddenNumber[num] === guessNumber[num]) {
      bulls++;
    } else if (hiddenNumber.includes(guessNumber[num])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = { calculateBullsAndCows };
