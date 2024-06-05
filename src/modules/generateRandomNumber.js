'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number = '';

  let digitsLeft = Array.from({ length: 9 }, (_, i) => i + 1);

  function generateDigit(max) {
    const index = Math.floor(Math.random() * (max - 0 + 1) + 0);

    const num = digitsLeft[index];

    digitsLeft = [
      ...digitsLeft.slice(0, index),
      ...digitsLeft.slice(index + 1),
    ];

    return num;
  }

  for (let i = 0; i < 4; i++) {
    number += generateDigit(digitsLeft.length - 1);

    if (i === 0) {
      digitsLeft.push(0);
    }
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
