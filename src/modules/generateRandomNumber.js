'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = Array.from(Array(10).keys());

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const firstIndex = digits[0] === 0 ? 1 : 0;

  const result = digits.slice(firstIndex, firstIndex + 4).join('');

  return +result;
}

module.exports = {
  generateRandomNumber,
};
