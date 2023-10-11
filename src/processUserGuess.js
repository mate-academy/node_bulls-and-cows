'use strict';

const { WINNING_STATUS } = require('./constants');

function processUserGuess(randomNumber, guess) {
  if (guess === randomNumber) {
    return WINNING_STATUS;
  }

  const stringRandomNumber = randomNumber.toString().split('');
  const stringGuess = guess.toString().split('');

  let bullsCount = 0;
  let cowsCount = 0;

  stringGuess.forEach((numb, index) => {
    const checkedIndex = index - bullsCount;

    if (+numb === +stringRandomNumber[checkedIndex]) {
      stringRandomNumber.splice(checkedIndex, 1);
      bullsCount++;
    }

    if (stringRandomNumber.includes(numb)) {
      cowsCount++;
    }
  });

  if (cowsCount || bullsCount) {
    return `bulls: ${bullsCount}, cows: ${cowsCount}`;
  }

  return 'Try again';
};

module.exports = {
  processUserGuess,
};
