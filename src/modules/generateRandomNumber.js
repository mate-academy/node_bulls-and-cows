'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let firstNumber = true;
  const numbers = new Set();

  while (numbers.size < 4) {
    if (firstNumber) {
      const randomNum = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

      numbers.add(randomNum);
      firstNumber = false;
    } else {
      const randomNum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

      numbers.add(randomNum);
    }
  }

  return +Array.from(numbers).join('');
}

module.exports = {
  generateRandomNumber,
};
