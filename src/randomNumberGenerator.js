'use strict';

const { inputOutputOperation } = require('./inputOutputOperation');

const randomNumberGenerator = () => {
  const arrOfDigits = [];

  while (arrOfDigits.length !== 4) {
    const number = Math.floor(Math.random() * 10) + '';

    if (!arrOfDigits.some(el => el === number)) {
      arrOfDigits.push(number);
    }
  }

  const randomNumber = arrOfDigits.join('');

  inputOutputOperation(randomNumber);
};

module.exports = { randomNumberGenerator };
