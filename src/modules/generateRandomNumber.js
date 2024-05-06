'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const number = String(
    Math.floor(Math.random() * 10 * Math.pow(10, 16)),
  ).split('');
  const res = [];

  for (const numb of number) {
    if (!res.includes(numb)) {
      res.push(numb);
    }

    if (res.length === 4) {
      return Number(res.join(''));
    }
  }
}

module.exports = {
  generateRandomNumber,
};
