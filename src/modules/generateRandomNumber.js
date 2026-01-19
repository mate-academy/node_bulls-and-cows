'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  const firstDigit = Math.floor(Math.random() * 9) + 1;

  digits.push(firstDigit);

  while (digits.length < 4) {
    const nextDigit = Math.floor(Math.random() * 10);

    if (!digits.includes(nextDigit)) {
      digits.push(nextDigit);
    }
  }

  return +digits.join('');
}

module.exports = {
  generateRandomNumber,
};
