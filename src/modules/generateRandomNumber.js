'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
const fourDigitsGenerator = () => Math.random().toString().slice(-4);

function generateRandomNumber() {
  while (true) {
    const numbString = fourDigitsGenerator();

    if (numbString[0] !== '0' && new Set(numbString).size === 4) {
      return +numbString;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
