'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number = '';
  const digits = Array.from({ length: 10 }, (_, i) => i);

  while (number.length !== 4) {
    const randomIndex = Math.ceil(Math.random() * (digits.length - 1));
    const randomDigit = digits[randomIndex];

    if (number.length || randomDigit !== 0) {
      number += randomDigit;
      digits.splice(randomIndex, 1);
    }
  }

  return +number;
}

module.exports = {
  generateRandomNumber,
};
