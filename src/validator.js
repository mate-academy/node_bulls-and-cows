'use strict';

const validateGuess = guessNumber => {
  if (isNaN(+guessNumber)) {
    return 'Invalid input!';
  }

  if (guessNumber.length !== 4) {
    return 'The number should consist of 4 digits!';
  }

  if (!guessNumber
    .split('')
    .every((digit, _, arr) => arr.indexOf(digit) === arr.lastIndexOf(digit))) {
    return 'The digits should be unique!';
  }

  return 'OK';
};

module.exports = {
  validateGuess,
};
