'use strict';

const { WINNING_STATUS } = require('./constants');

function processUserGuess(randomNumber, guess) {
  if (guess === randomNumber) {
    return WINNING_STATUS;
  }

  const stringRandomNumber = randomNumber.toString().split('');
  const stringGuess = guess.toString().split('');

  const bullsCount = stringGuess.reduce((acc, numb, index) => {
    const checkedIndex = index - acc;
    let increaseBy = 0;

    if (+numb === +stringRandomNumber[checkedIndex]) {
      stringRandomNumber.splice(checkedIndex, 1);
      increaseBy++;
    }

    return acc + increaseBy;
  }, 0);

  const cowsCount = stringGuess.reduce((acc, numb) => {
    let increaseBy = 0;

    if (stringRandomNumber.includes(numb)) {
      increaseBy++;
    }

    return acc + increaseBy;
  }, 0);

  if (cowsCount || bullsCount) {
    return `bulls: ${bullsCount}, cows: ${cowsCount}`;
  }

  return 'Try again';
};

module.exports = {
  processUserGuess,
};
