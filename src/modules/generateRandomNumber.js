'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = [];

  digits.push(randomNumber(1, 9));

  while (digits.length < 4) {
    const nextDigit = randomNumber(0, 9);

    if (!digits.includes(nextDigit)) {
      digits.push(nextDigit);
    }
  }

  return parseInt(digits.join(''), 10);
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  generateRandomNumber,
};
