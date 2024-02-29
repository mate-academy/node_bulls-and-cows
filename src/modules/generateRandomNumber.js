'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number = '';
  const digits = Array.from({ length: 9 }, (_, i) => i + 1);

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const randomDigit = digits.splice(randomIndex, 1)[0];

    number += randomDigit;
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
