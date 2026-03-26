'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  const allDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const firstDigit = digits[Math.floor(Math.random() * digits.length)];

  const remainingDigits = allDigits
    .filter((d) => d !== firstDigit)
    .sort(() => Math.random() - 0.5);

  const result = firstDigit + remainingDigits.slice(0, 3).join('');

  return parseInt(result, 10);
}

module.exports = {
  generateRandomNumber,
};
