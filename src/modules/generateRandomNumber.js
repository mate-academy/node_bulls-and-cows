'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber = '';

  while (randomNumber.length !== 4) {
    randomNumber = Math.floor(Math.random() * 9000) + 1000;

    const set = new Set(randomNumber.toString().split(''));

    randomNumber = Array.from(set).join('');
  }

  return Number(randomNumber);
}

module.exports = {
  generateRandomNumber,
};
