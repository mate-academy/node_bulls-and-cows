'use strict';

const { NUMBER_LENGTH } = require('./constants');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [...Array(10).keys()];
  const randomDigits = [];

  let i = 0;

  while (randomDigits.length < NUMBER_LENGTH) {
    const index = getRandomInteger(0, digits.length - 1);

    if (!index && !i) {
      continue;
    }

    randomDigits.push(digits[index]);
    digits.splice(index, 1);
    i += 1;
  }

  return +randomDigits.join('');
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  generateRandomNumber,
};
