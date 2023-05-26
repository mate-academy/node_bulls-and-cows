'use strict';

function validateGuess(guess) {
  const uniqueDigits = new Set(guess);

  return guess.length === 4 && uniqueDigits.size === 4;
}

module.exports = validateGuess;
