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
    const digit = Math.floor(Math.random() * 10).toString();

    if (!digits.includes(digit)) {
      if (digit === '0') {
        if (digits.length === 0) {
          continue;
        } else {
          digits.push(digit);
        }
      } else {
        digits.push(digit);
      }
    }
  }

  return Number(digits.join(''));
}

module.exports = {
  generateRandomNumber,
};
