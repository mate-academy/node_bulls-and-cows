'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  let result = '';

  while (result.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (
      !result.includes(String(number)) &&
      !(result.length === 0 && number === 0)
    ) {
      result += number;
    }
  }

  return Number(result);
}

module.exports = {
  generateRandomNumber,
};
