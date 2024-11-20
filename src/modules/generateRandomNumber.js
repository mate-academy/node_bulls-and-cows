'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = '123456789';
  let availableDigits = '0123456789';

  const firstDigit = digits[Math.floor(Math.random() * digits.length)];

  availableDigits = availableDigits.replace(firstDigit, '');

  let remainingDigits = '';

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * availableDigits.length);

    remainingDigits += availableDigits[randomIndex];
    availableDigits = availableDigits.replace(availableDigits[randomIndex], '');
  }

  const randomNumber = firstDigit + remainingDigits;

  return parseInt(randomNumber, 10);
}

module.exports = {
  generateRandomNumber,
};
