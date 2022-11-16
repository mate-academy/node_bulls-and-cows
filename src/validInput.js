'use strict';

function validInput(guess) {
  if (guess.length !== 4) {
    return 'Guessed number format is XXXX, try again: ';
  } else if (isNaN(guess)) {
    return 'Symbols not allowed, try again: ';
  }

  return '';
}

module.exports.validInput = validInput;
