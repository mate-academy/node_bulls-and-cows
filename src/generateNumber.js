'use strict';

const { EXPECTED_NUMBER_LENGTH } = require('./constants');

function generateNumber() {
  const digitsToInsert = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const distinctDigits = [];

  while (distinctDigits.length < EXPECTED_NUMBER_LENGTH) {
    const randomIndex = Math.floor(Math.random() * digitsToInsert.length);

    if (!distinctDigits.length && digitsToInsert[randomIndex] === 0) {
      continue;
    }

    const digitToInsert = digitsToInsert.splice(randomIndex, 1);

    distinctDigits.push(digitToInsert);
  }

  return +distinctDigits.join('');
}

module.exports = {
  generateNumber,
};
