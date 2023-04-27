'use strict';

function calculateBullsAndCows(number, guessNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === guessNumber[i]) {
      bulls += 1;
      continue;
    }

    if (number.includes(guessNumber[i])) {
      cows += 1;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = calculateBullsAndCows;
