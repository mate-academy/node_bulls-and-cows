'use strict';

const { NUMBER_LENGTH } = require('../constants');

function numberGenerator() {
  const arrayOfRandomNumbers = [];

  while (arrayOfRandomNumbers.length < NUMBER_LENGTH) {
    const randomDigit = 0 + Math.random() * (9 + 1 - 0);
    const preparedRandomDigit = Math.floor(randomDigit).toString();

    if (arrayOfRandomNumbers.includes(preparedRandomDigit)) {
      continue;
    }

    arrayOfRandomNumbers.push(preparedRandomDigit);
  }

  return arrayOfRandomNumbers.join('');
}

module.exports = { numberGenerator };
