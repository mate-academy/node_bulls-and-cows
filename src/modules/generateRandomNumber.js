'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = new Set();

  numbers.add(Math.floor(Math.random() * 9) + 1);

  while (numbers.size < 4) {
    const number = Math.floor(Math.random() * 10);

    numbers.add(number);
  }

  const arrayNumbers = [...numbers];

  return +arrayNumbers.join('');
}

module.exports = {
  generateRandomNumber,
};
