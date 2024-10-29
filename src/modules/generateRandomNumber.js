'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumbers = [];

  randomNumbers.push(Math.floor(Math.random() * 9) + 1);

  while (randomNumbers.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!randomNumbers.includes(digit)) {
      randomNumbers.push(digit);
    }
  }

  return +randomNumbers.join('');
}

module.exports = {
  generateRandomNumber,
};
