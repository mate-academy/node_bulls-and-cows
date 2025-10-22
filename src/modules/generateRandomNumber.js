'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  // Create array of digits 1-9 for first position (no leading 0)
  const firstDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Create array of digits 0-9 for remaining positions
  const remainingDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Get random first digit and remove it from remaining digits
  const first = firstDigit[Math.floor(Math.random() * firstDigit.length)];

  remainingDigits.splice(remainingDigits.indexOf(first), 1);

  // Get random second digit and remove it
  const second =
    remainingDigits[Math.floor(Math.random() * remainingDigits.length)];

  remainingDigits.splice(remainingDigits.indexOf(second), 1);

  // Get random third digit and remove it
  const third =
    remainingDigits[Math.floor(Math.random() * remainingDigits.length)];

  remainingDigits.splice(remainingDigits.indexOf(third), 1);

  // Get random fourth digit
  const fourth =
    remainingDigits[Math.floor(Math.random() * remainingDigits.length)];

  // Combine digits into 4-digit number
  return parseInt(`${first}${second}${third}${fourth}`);
}

module.exports = {
  generateRandomNumber,
};
