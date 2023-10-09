'use strict';

const { DIGITS, NUMBER_OF_DIGITS } = require('./constants');

function isValidGuess(guesses) {
  for (const guess of guesses) {
    if (!DIGITS.includes(guess)) {
      return false;
    }
  }

  return new Set(guesses).size === NUMBER_OF_DIGITS;
}

module.exports = {
  isValidGuess,
};
