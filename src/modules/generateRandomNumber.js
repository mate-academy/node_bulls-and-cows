'use strict';
/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  const numbers = new Set();

  while (numbers.size < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (numbers.size === 0 && randomNumber === 0) {
      continue;
    }

    numbers.add(randomNumber);
  }

  return Number([...numbers].join(''));
}

module.exports = {
  generateRandomNumber,
};
