'use strict';

function calculateBullsAndCows(secretNumber, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === guess[i]) {
      bulls++;
    } else if (secretNumber.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = { calculateBullsAndCows };
