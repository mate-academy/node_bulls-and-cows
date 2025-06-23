'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const firstDigitOptions = digits.slice(1);
  const firstDigit = firstDigitOptions.splice(
    Math.floor(Math.random() * firstDigitOptions.length),
    1,
  )[0];

  const remainingDigits = digits.filter((d) => d !== firstDigit);
  const shuffled = remainingDigits.sort(() => Math.random() - 0.5);
  const nextThree = shuffled.slice(0, 3);

  const result = firstDigit + nextThree.join('');

  return +result;
}

module.exports = { generateRandomNumber };
