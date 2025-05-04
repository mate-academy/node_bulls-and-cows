'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [];

  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (digits.length === 0 && randomDigit === 0) {
      continue;
    }

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  return parseInt(digits.join(''));
}

module.exports = {
  generateRandomNumber,
};
