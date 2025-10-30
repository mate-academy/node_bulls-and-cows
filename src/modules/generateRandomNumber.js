/* eslint-disable prettier/prettier */
'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = new Set();

  const first = 1 + Math.floor(Math.random() * 9);

  digits.add(first);

  while (digits.size < 4) {
    const idx = Math.floor(Math.random() * 10);

    digits.add(idx);
  }

  return Number(Array.from(digits).join(''));
}

module.exports = {
  generateRandomNumber,
};
