'use strict';

const { WIN_GUESS } = require('./constants');

function calculateBullsAndCows(secretNumber, guessedNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < WIN_GUESS; i++) {
    if (guessedNumber[i] === secretNumber[i]) {
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
