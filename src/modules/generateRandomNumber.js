'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

const assignRandomNumber = (secretCode) => {
  const number = Math.floor(Math.random() * 9 + 1);

  if (secretCode.includes(number)) {
    return assignRandomNumber(secretCode);
  }

  return number;
};

function generateRandomNumber() {
  const secretCode = Array.from({ length: 4 }, (el) => 'x');

  for (let i = 0; i < secretCode.length; i++) {
    secretCode[i] = assignRandomNumber(secretCode);
  }

  return Number(secretCode.join(''));
}

module.exports = { generateRandomNumber };
