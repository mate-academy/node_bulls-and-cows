'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number = '';
  const firstDigit = Math.floor(Math.random() * 9) + 1;

  number += firstDigit.toString();

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10).toString();

    if (!number.includes(digit)) {
      number += digit;
    }
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
