'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumber = Math.floor(1000 + Math.random() * 900);

  if ([...new Set(randomNumber.toString())].length !== 4) {
    return generateRandomNumber();
  }

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
