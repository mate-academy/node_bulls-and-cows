'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbers = [];

  for (let i = 1; i <= 4; i++) {
    while (true) {
      const randomNum = Math.floor(Math.random() * 9);

      if (randomNum === 0 && numbers.length === 0) {
        continue;
      }

      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);

        break;
      }
    }
  }

  return +numbers.join('');
}

module.exports = {
  generateRandomNumber,
};
