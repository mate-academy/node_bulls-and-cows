'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const n = new Set();

  while (n.size < 4) {
    n.add(Math.ceil(Math.random() * 9));
  }

  return +Array.from(n).join('');
}

module.exports = {
  generateRandomNumber,
};
