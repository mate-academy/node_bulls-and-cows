'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const firstDigitIndex = Math.floor(Math.random() * 9) + 1;
  let randomNumber = digits[firstDigitIndex];

  digits.splice(firstDigitIndex, 1);

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    randomNumber += digits[randomIndex];
    digits.splice(randomIndex, 1);
  }

  return Number(randomNumber);
}

module.exports = {
  generateRandomNumber,
};
