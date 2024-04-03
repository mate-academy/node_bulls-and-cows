'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

const getRandomNum = () => {
  return Math.floor(Math.random() * 9000) + 1000;
};

function generateRandomNumber() {
  let res;

  do {
    res = getRandomNum();
  } while (new Set(String(res).split('')).size !== 4);

  return res;
}

module.exports = {
  generateRandomNumber,
};
