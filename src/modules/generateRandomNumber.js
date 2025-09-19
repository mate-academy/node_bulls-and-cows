'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = '0123456789'.split('');
  let number = '';

  while (number.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits[randomIndex];

    if (number.length === 0 && digit === '0') {
      continue;
    }

    number += digit;
    digits.splice(randomIndex, 1);
  }

  return Number(number);
}

module.exports = {
  generateRandomNumber,
};
