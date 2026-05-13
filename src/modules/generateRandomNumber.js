'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  // First digit 1–9 so the number is four digits (no leading zero)
  digits.push(Math.floor(Math.random() * 9) + 1);

  while (digits.length < 4) {
    const d = Math.floor(Math.random() * 10);

    if (!digits.includes(d)) {
      digits.push(d);
    }
  }

  return Number(digits.join(''));
}

module.exports = {
  generateRandomNumber,
};
