'use strict';

const { EXPECTED_NUMBER_LENGTH } = require('./constants');

function generateNumber() {
  const differentRandomDigits = [];

  while (differentRandomDigits.length < EXPECTED_NUMBER_LENGTH) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!differentRandomDigits.includes(randomDigit)) {
      if (randomDigit === 0 && !differentRandomDigits.length) {
        continue;
      }
      differentRandomDigits.push(randomDigit);
    }
  }

  return differentRandomDigits.join('');
}

module.exports = { generateNumber };
