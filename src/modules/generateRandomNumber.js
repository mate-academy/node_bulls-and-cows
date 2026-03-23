'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const result = [];

  while (result.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (result.length === 0 && number === 0) {
      continue;
    }

    if (!result.includes(number)) {
      result.push(number);
    }
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
