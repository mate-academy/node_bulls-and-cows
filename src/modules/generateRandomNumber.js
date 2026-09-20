'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const result = [];

  while (result.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (
      result.includes(randomNumber) ||
      (result.length === 0 && randomNumber === 0)
    ) {
      continue;
    } else {
      result.push(randomNumber);
    }
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
