'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = new Set();

  while (digits.size < 4) {
    digits.add(Math.floor(Math.random() * 10));
  }

  return parseInt(Array.from(digits).join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
