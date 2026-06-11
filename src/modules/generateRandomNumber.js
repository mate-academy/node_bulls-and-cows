'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const result = [];

  result.push(Math.floor(Math.random() * 9) + 1);

  while (result.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!result.includes(digit)) {
      result.push(digit);
    }
  }

  return parseInt(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
