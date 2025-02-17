'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  let number = new Set();

  number.add(Math.floor(Math.random() * 9) + 1);

  while (number.size < 4) {
    number.add(Math.floor(Math.random() * 10));
  }

  return +Array.from(number).join('');
}

module.exports = {
  generateRandomNumber,
};
