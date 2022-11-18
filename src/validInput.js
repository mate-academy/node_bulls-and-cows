'use strict';

function validInput(guess) {
  if (guess.length !== 4) {
    return 'Guessed number format is XXXX, try again: ';
  } else if (isNaN(guess)) {
    return 'Symbols not allowed, try again: ';
  } else {
    const isUnique = new Set(guess.split('')).size;

    if (isUnique !== 4) {
      return 'You need to enter 4 different digits, try again: '
    }
  }

  return '';
}

module.exports = { validInput }
