'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // First digit cannot be 0
  const firstDigit = digits.splice(
    Math.floor(Math.random() * digits.length),
    1,
  )[0];

  const remainingDigits = [0, ...digits]; // Add 0 back for the remaining digits
  const numArray = [firstDigit];

  while (numArray.length < 4) {
    const index = Math.floor(Math.random() * remainingDigits.length);

    numArray.push(remainingDigits.splice(index, 1)[0]);
  }

  return parseInt(numArray.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
