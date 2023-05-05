'use strict';

function calculateBullsAndCows(number, guessNumber) {
  let bulls = 0;
  let cows = 0;

  guessNumber
    .split('')
    .forEach((digit, index) => {
      const isDigitValid = number.includes(digit);
      const isDigitOnRightPlace = digit === number[index];

      if (isDigitOnRightPlace) {
        bulls += 1;
      }

      if (isDigitValid) {
        cows += 1;
      }
    });

  return {
    bulls,
    cows,
  };
}

module.exports = calculateBullsAndCows;
