'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function randomDigit(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateRandomNumber() {
  const digits = [];

  for (let i = 0; digits.length < 4; i++) {
    if (digits.length === 0) {
      const random = randomDigit(1, 9);

      if (!digits.includes(random)) {
        digits.push(random);
      }
    } else {
      const random = randomDigit(0, 9);

      if (!digits.includes(random)) {
        digits.push(random);
      }
    }
  }

  return +digits.join('');
}

module.exports = {
  generateRandomNumber,
};
