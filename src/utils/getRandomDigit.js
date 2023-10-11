'use strict';

const { constants } = require('./constants');

function getRandomDigits() {
  const ALL_DIGITS = 10;
  let digit = '';

  while (digit.length < constants.MAX_LENGTH) {
    const randomDigit = `${Math.floor(Math.random() * ALL_DIGITS)}`;

    if (!digit.includes(randomDigit)) {
      digit += randomDigit;
    }
  }

  return digit;
}

module.exports = {
  getRandomDigits,
};
