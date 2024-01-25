'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number = '';
  const digits = Array.from({ length: 9 }, (_, i) => i);

  for (let i = 0; i < 4; i++) {
    const randomDigit = Math.ceil(Math.random() * digits.length);

    if (!number.includes(randomDigit)) {
      number += randomDigit;
    } else {
      i--;
    }
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
