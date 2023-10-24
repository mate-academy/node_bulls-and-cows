'use strict';

module.exports = function calculateBullsAndCows(
  secretNumber, guess, MAX_DIGITS) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < MAX_DIGITS; i++) {
    if (guess[i] === secretNumber[i]) {
      bulls++;
    } else if (secretNumber.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};
