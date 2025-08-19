'use strict';

/* eslint-disable no-console */
/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const number = [];
  let randomNumber;

  while (number.length < 4) {
    if (number.length === 0) {
      randomNumber = Math.ceil(Math.random() * 9);

      number.push(randomNumber);

      continue;
    }

    randomNumber = Math.floor(Math.random() * 10);

    if (!number.includes(randomNumber)) {
      number.push(randomNumber);
    }
  }

  return +number.join('');
}

module.exports = {
  generateRandomNumber,
};
