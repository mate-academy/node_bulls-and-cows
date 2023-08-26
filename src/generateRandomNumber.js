'use strict';

const NUMBER_LENGTH = 4;
const MAX_RANGE_VALUE = 10;

function generateRandomNumber() {
  const usedDigits = new Set();
  let result = '';

  while (usedDigits.size < NUMBER_LENGTH) {
    const randomDigit = Math.floor(Math.random() * MAX_RANGE_VALUE);

    if (!usedDigits.has(randomDigit)) {
      usedDigits.add(randomDigit);
      result += randomDigit;
    }
  }

  return result;
}

module.exports = generateRandomNumber;
