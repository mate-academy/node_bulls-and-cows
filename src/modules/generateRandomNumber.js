'use strict';

const { VALID_LENGTH } = require('./checkIsValidUserInput');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  while (true) {
    const number = Math.ceil(Math.random() * 10 ** VALID_LENGTH);

    if (new Set(number.toString().split('')).size === VALID_LENGTH) {
      return number;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
