'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const random = Math.floor(Math.random() * 9000) + 1000;
  const digits = new Set(random.toString().split(''));

  if (digits.size !== 4 || random.toString()[0] === '0') {
    return generateRandomNumber();
  }

  return random;
}

module.exports = {
  generateRandomNumber,
};
