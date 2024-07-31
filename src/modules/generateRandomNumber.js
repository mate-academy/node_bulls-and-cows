'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomDigit(initialNumber) {
  const candidate = Math.floor(Math.random() * 9) + 1;

  if (candidate && !initialNumber.includes(candidate)) {
    return candidate;
  }

  return generateRandomDigit(initialNumber);
}

function generateRandomNumber() {
  let number = '';

  for (let i = 0; i < 4; i++) {
    const digit = generateRandomDigit(number);

    number += digit;
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
