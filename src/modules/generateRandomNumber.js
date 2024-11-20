'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {string} A random 4-digit number as a string
 */
function generateRandomNumber() {
  let result = '';

  while (result.length !== 4) {
    const number = Math.floor(Math.random() * 10).toString();

    if (!result.includes(number)) {
      if (result.length === 0 && number === '0') {
        continue;
      }
      result += number;
    }
  }

  return Number(result);
}

module.exports = {
  generateRandomNumber,
};
