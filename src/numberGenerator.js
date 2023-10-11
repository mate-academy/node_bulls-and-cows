'use strict';

const { NUMBER_LENGTH } = require('../constants');

function numberGenerator() {
  const arrayOfRandomNumbers = [];

  while (arrayOfRandomNumbers.length < NUMBER_LENGTH) {
    const randomDigit = Math.random() * 10;
    const preparedRandomDigit = Math.floor(randomDigit).toString();

    if (arrayOfRandomNumbers.includes(preparedRandomDigit)) {
      continue;
    }

    arrayOfRandomNumbers.push(preparedRandomDigit);
  }

  return arrayOfRandomNumbers.join('');
}

module.exports = { numberGenerator };
