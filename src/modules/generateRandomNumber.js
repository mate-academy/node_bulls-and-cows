'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const min = 1000;
  const max = 9999;
  const random = Math.floor(Math.random() * (max - min)) + min;

  const splittedRandom = random.toString().split('');
  const unigue = [...new Set(splittedRandom)];

  if (splittedRandom.length === unigue.length) {
    return random;
  } else {
    return generateRandomNumber();
  }
}

module.exports = {
  generateRandomNumber,
};
