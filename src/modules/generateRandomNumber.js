'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const partsOfNumber = [];

  const getRandomDigit = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      partsOfNumber.push(getRandomDigit(1, 9));
      continue;
    }

    let digit = getRandomDigit(0, 9);

    while (partsOfNumber.includes(digit)) {
      digit = getRandomDigit(0, 9);
    }

    partsOfNumber.push(digit);
  }

  return +partsOfNumber.join('');
}

module.exports = {
  generateRandomNumber,
};
