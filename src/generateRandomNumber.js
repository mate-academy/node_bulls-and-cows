'use strict';

const { DIGITS, NUMBER_OF_DIGITS } = require('./constants');

function generateRandomNumber() {
  const numbers = [];

  while (numbers.length < NUMBER_OF_DIGITS) {
    const digit = Math.floor(Math.random() * DIGITS.length);

    if (!numbers.length || !numbers.includes(DIGITS[digit])) {
      numbers.push(DIGITS[digit]);
    }
  }

  return numbers.join('');
};

module.exports = {
  generateRandomNumber,
};
