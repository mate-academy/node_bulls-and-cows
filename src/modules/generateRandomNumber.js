'use strict';

const { assignRandomNumber } = require('./assignRandomNumber');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const secretCode = Array.from({ length: 4 }, (el) => 'x');

  for (let i = 0; i < secretCode.length; i++) {
    secretCode[i] = assignRandomNumber(secretCode);
  }

  return Number(secretCode.join(''));
}

module.exports = { generateRandomNumber };
