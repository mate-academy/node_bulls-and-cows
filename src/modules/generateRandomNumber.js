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
    const rand = Math.floor(Math.random() * 10);

    if (number.length === 0 && rand === 0) {
      continue;
    }

    if (!number.includes(rand)) {
      number.push(rand);
    }
  }

  return Number(number.join(''));
}

module.exports = {
  generateRandomNumber,
};
