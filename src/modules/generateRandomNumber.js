'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numberToGuess = [];

  while (numberToGuess.length < 4) {
    const digit = Math.floor(Math.random() * 10).toString();

    // Ensure the first digit is not '0' and no duplicate digits
    if (
      (numberToGuess.length === 0 && digit === '0') ||
      numberToGuess.includes(digit)
    ) {
      continue;
    }

    numberToGuess.push(digit);
  }

  return Number(numberToGuess.join(''));
}

module.exports = {
  generateRandomNumber,
};
