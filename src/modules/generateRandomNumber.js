'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumber = [];

  do {
    const number = Math.floor(Math.random() * 9) + 1;

    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  } while (randomNumber.length !== 4);

  return +randomNumber.join('');
}

module.exports = {
  generateRandomNumber,
};
