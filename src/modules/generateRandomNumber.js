'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  const uniqueNums = new Set();

  uniqueNums.add(Math.floor(Math.random() * 9) + 1);

  while (uniqueNums.size < 4) {
    uniqueNums.add(Math.floor(Math.random() * 10));
  }

  const wynik = Array.from(uniqueNums).join('');

  return +wynik;
}

module.exports = {
  generateRandomNumber,
};
