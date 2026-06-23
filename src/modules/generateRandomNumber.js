'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numberSet = new Set();

  while (numberSet.size < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (numberSet.size === 0 && digit === 0) {
      continue;
    }
    numberSet.add(digit);
  }

  return parseInt(Array.from(numberSet).join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
