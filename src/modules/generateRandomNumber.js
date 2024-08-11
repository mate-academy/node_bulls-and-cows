'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const result = new Set();

  result.add(Math.floor(Math.random() * 9 + 1));

  while (result.size < 4) {
    result.add(Math.floor(Math.random() * 10));
  }

  const number = parseInt(Array.from(result).join(''), 10);

  return number;
}

// setInterval(generateRandomNumber, 500);

module.exports = {
  generateRandomNumber,
};
