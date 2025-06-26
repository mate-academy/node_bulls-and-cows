'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const number = [];

  const firstIndex = Math.floor(Math.random() * 9) + 1;

  number.push(digits[firstIndex]);
  digits.splice(firstIndex, 1);

  for (let i = 0; i < 3; i++) {
    const idx = Math.floor(Math.random() * digits.length);

    number.push(digits[idx]);
    digits.splice(idx, 1);
  }

  return +number.join('');
}

module.exports = {
  generateRandomNumber,
};
