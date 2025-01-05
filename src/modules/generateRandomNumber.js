'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [generateRandomDigit([0])];

  while (digits.length < 4) {
    digits.push(generateRandomDigit(digits));
  }

  return +digits.join('');
}

// Returns a random single digit number that is not in the provided blacklist
function generateRandomDigit(blacklist = []) {
  const whitelist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
    (n) => !blacklist.includes(n),
  );

  return whitelist.at(Math.floor(whitelist.length * Math.random()));
}

module.exports = {
  generateRandomNumber,
};
