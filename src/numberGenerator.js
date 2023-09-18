'use strict';

const { WIN_GUESS } = require('./constants');

function generateRandomNumber() {
  let digits = '0123456789';
  let randomNum = '';

  while (randomNum.length < WIN_GUESS) {
    const randomDigitIndex = Math.floor(Math.random() * digits.length);

    randomNum += digits[randomDigitIndex];

    digits += digits.slice(randomDigitIndex, 1);
  }

  return randomNum;
}

module.exports = {
  generateRandomNumber,
};
