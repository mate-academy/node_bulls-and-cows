'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const number = [];

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (number.length === 0 && digit === 0) {
      continue;
    }

    if (!number.includes(digit)) {
      number.push(digit);
    }
  }

  return +number.join('');
}

module.exports = {
  generateRandomNumber,
};
