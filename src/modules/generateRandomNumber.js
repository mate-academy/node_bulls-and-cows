'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let result = '';

  result += Math.floor(Math.random() * 9) + 1;

  while (result.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!result.includes(digit)) {
      result += digit;
    }
  }

  return parseInt(result, 10);
}

module.exports = {
  generateRandomNumber,
};
