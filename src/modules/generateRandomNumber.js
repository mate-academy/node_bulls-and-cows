'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = new Array(4);

  digits[0] = Math.floor(1 + Math.random() * 9);

  const usedDigits = new Set([digits[0]]);

  for (let i = 1; i < 4; i++) {
    let randomDigit;

    do {
      randomDigit = Math.floor(Math.random() * 10);
    } while (usedDigits.has(randomDigit));

    digits[i] = randomDigit;
    usedDigits.add(randomDigit);
  }

  return Number(digits.join(''));
}

module.exports = {
  generateRandomNumber,
};
