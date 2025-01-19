'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digit = Math.floor(1000 + Math.random() * 9000);

  if (new Set(digit.toString()).size !== 4) {
    return generateRandomNumber();
  }

  return digit;
}

module.exports = {
  generateRandomNumber,
};
