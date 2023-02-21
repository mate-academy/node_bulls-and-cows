/* eslint-disable no-console */
'use strict';

const validateGuess = (guess) => {
  const preparedGuess = guess
    .split('')
    .map(el => +el)
    .sort((a, b) => a - b);

  if (preparedGuess.length !== 4) {
    console.log('Your number must consist of 4 different digits');
  }

  for (let i = 1; i < preparedGuess.length; i++) {
    if (preparedGuess[i] === preparedGuess[i - 1]) {
      console.log('Digits in your number must be unique');
      break;
    }
  }
};

module.exports = { validateGuess };
