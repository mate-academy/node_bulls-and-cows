'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  /* Write your code here */
  const digits = [];

  digits.push(Math.floor(Math.random() * 9) + 1);

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return parseInt(digits.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
