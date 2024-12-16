'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * (10000 - 1) + 1);

  if (new Set(randomNumber.toString()).size !== 4) {
    return generateRandomNumber();
  } else {
    return randomNumber;
  }
}

module.exports = {
  generateRandomNumber,
};
