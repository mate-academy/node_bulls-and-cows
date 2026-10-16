'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let digits = '';

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit) && !(digits.length === 0 && digit === 0)) {
      digits += String(digit);
    }
  }

  return Number(digits);
}

module.exports = {
  generateRandomNumber,
};
