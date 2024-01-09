'use strict';

const validateGuess = guessNumber => {
  if (isNaN(+guessNumber)) {
    return 'Invalid input!';
  }

  if (guessNumber.length !== 4) {
    return 'The number should consist of 4 digits!';
  }

  return 'OK';
};

module.exports = {
  validateGuess,
};
