'use strict';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const availableDigits = [...digits];
  let result = '';

  const firstDigits = availableDigits.slice(1);
  const firstIndex = Math.floor(Math.random() * firstDigits.length);
  const firstDigit = firstDigits[firstIndex];

  result += firstDigit;
  availableDigits.splice(availableDigits.indexOf(firstDigit), 1);

  for (let i = 0; i < 3; i++) {
    const randIndex = Math.floor(Math.random() * availableDigits.length);
    const digit = availableDigits.splice(randIndex, 1)[0];

    result += digit;
  }

  return parseInt(result, 10);
}

module.exports = {
  generateRandomNumber,
};
