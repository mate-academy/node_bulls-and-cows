'use strict';

function calculateBullsAndCows(secretNumber, guessedNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (secretNumber[i] === guessedNumber[i]) {
      bulls++;
    } else if (secretNumber.includes(guessedNumber[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = {
  calculateBullsAndCows,
};
