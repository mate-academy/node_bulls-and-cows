'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let result = '';

  while (result.length <= 3) {
    const randomChar = Math.trunc(Math.random() * 10);

    if (result.length === 0 && randomChar === 0) {
      continue;
    }

    if (result.includes(randomChar)) {
      continue;
    }

    result += randomChar;
  }

  return Number(result);
}

module.exports = {
  generateRandomNumber,
};
