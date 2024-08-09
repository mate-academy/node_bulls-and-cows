'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const min = 1;
  const max = 10;

  const numbers = new Set();

  while (numbers.size < 4) {
    const number = Math.floor(Math.random() * (max - min) + min);

    numbers.add(number);
  }

  return Number([...numbers].join(''));
}

module.exports = {
  generateRandomNumber,
};
