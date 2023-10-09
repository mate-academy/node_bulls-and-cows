'use strict';

function isValidGuess(guesses) {
  if (isNaN(+guesses)) {
    return false;
  }

  return new Set(guesses).size === 4;
}

module.exports = {
  isValidGuess,
};
