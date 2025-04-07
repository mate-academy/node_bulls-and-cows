'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);

  return parseInt(arr.slice(0, 4).join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
