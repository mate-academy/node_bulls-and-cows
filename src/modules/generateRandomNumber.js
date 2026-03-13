'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const number = [];

  while (number.length < 4) {
    let num;

    if (number.length === 0) {
      num = Math.floor(Math.random() * 9 + 1);

      number.push(num);
    } else {
      num = Math.floor(Math.random() * 10);

      if (!number.includes(num)) {
        number.push(num);
      }
    }
  }

  return Number(number.join(''));
}

module.exports = {
  generateRandomNumber,
};
