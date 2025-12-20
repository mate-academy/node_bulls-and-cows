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
    const n = Math.floor(Math.random() * 10);

    if (digits.length === 0 && n === 0) {
      continue;
    }

    if (!digits.includes(n)) {
      digits.push(n);
    }
  }

  return Number(digits.join(''));
}

module.exports = {
  generateRandomNumber,
};
