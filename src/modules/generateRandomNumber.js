'use strict';

const { checkIsValidUserInput } = require('./checkIsValidUserInput');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  while (true) {
    const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    if (checkIsValidUserInput(String(randomNumber))) {
      return randomNumber;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
