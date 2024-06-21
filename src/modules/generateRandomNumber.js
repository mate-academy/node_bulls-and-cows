'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  digits.push(Math.floor(Math.random() * 9 + 1));

  for (let i = 0; i < 3; i++) {
    let digit = Math.floor(Math.random() * 10);

    while (digits.includes(digit)) {
      digit = Math.floor(Math.random() * 10);
    }

    digits.push(digit);
  }

  return +digits.join('');
}

module.exports = {
  generateRandomNumber,
};
