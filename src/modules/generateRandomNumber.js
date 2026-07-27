'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  digits.push(Math.floor(Math.random() * 9) + 1);

  while (digits.length < 4) {
    const random = Math.floor(Math.random() * 10);

    if (digits.includes(random)) {
      continue;
    }

    digits.push(random);
  }

  return +digits.join('');
}

module.exports = {
  generateRandomNumber,
};
