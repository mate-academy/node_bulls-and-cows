'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomNumber = [];

  while (randomNumber.length < 4) {
    const newNumber = Math.floor(Math.random() * (9 - 1) + 1);

    if (!randomNumber.includes(newNumber)) {
      randomNumber.push(newNumber);
    }
  }

  return +randomNumber.join('');
}

module.exports = {
  generateRandomNumber,
};
