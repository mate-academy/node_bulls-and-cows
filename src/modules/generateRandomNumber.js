'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNum = new Set();

  while (randomNum.size === 0) {
    const firstElement = Math.floor(Math.random() * 9 + 1);

    randomNum.add(firstElement);
  }

  while (randomNum.size < 4) {
    const randomElement = Math.floor(Math.random() * 10);

    randomNum.add(randomElement);
  }

  return parseInt(Array.from(randomNum).join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
