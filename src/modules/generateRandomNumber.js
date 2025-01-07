'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const result = Math.floor(Math.random() * 8999) + 1000;
  const numbers = new Set(result.toString());

  return numbers.size === 4 ? result : generateRandomNumber();
}

module.exports = {
  generateRandomNumber,
};
