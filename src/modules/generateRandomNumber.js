'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const firstDigit = Math.floor(Math.random() * 9) + 1;
  const otherDigits = [];

  for (let i = 0; i < 3; i++) {
    let digit;

    do {
      digit = Math.floor(Math.random() * 10);
    } while (otherDigits.includes(digit) || digit === firstDigit);
    otherDigits.push(digit);
  }

  const number = parseInt(firstDigit.toString() + otherDigits.join(''));

  return number;
}

module.exports = {
  generateRandomNumber,
};
