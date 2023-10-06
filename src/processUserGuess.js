'use strict';

const { WINNING_STATUS } = require('./constants');

function processUserGuess(randomNumber, guess) {
  if (guess === randomNumber) {
    return WINNING_STATUS;
  }

  const stringRandomNumber = randomNumber.toString().split('');
  const stringGuess = guess.toString().split('');

  const isBull = stringRandomNumber
    .some((numb, index) => +numb === +stringGuess[index]);

  if (isBull) {
    return 'bull';
  }

  const isCow = stringRandomNumber
    .some(numb => stringGuess.includes(numb));

  if (isCow) {
    return 'cow';
  }

  return 'Try again';
};

module.exports = {
  processUserGuess,
};
