'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  while (digits.length < 4) {
    let digit;

    if (digits.length === 0) {
      digit = Math.floor(Math.random() * 9) + 1;
    } else {
      digit = Math.floor(Math.random() * 10);
    }

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return Number(digits.join(''));
}

module.exports = {
  generateRandomNumber,
};
