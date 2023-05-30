'use strict';

function checkValidInput(guess) {
  if (guess.length !== 4) {
    return false;
  }

  const digits = guess.split('');

  for (const digit of digits) {
    if (isNaN(digit)) {
      return false;
    }
  }

  return true;
}

module.exports = checkValidInput;
