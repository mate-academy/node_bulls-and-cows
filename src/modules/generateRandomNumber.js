'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const gen = new Set();

  while (gen.size < 4) {
    if (gen.size === 0) {
      const n = getRandomInt(8) + 1;

      const sn = `${n}`;

      gen.add(sn);
    } else {
      const n = getRandomInt(9);

      const sn = `${n}`;

      gen.add(sn);
    }
  }

  return +Array.from(gen).join('');
}

module.exports = {
  generateRandomNumber,
};
