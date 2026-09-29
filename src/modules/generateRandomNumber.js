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
    const num = Math.floor(Math.random() * 9 + 1);

    numbers.add(num);
  }

  return +Array.from(numbers.values()).join('');
}

module.exports = {
  generateRandomNumber,
};
