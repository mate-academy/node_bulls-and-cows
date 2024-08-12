'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
const LENGTH = 4;

function generateDigit() {
  return Math.floor(Math.random() * 10);
}

function generateRandomNumber() {
  let strNum = '';

  while (strNum.length < LENGTH) {
    const digit = generateDigit().toString();

    if (strNum.length === 0 && digit === '0') {
      continue;
    }

    if (!strNum.includes(digit)) {
      strNum += digit;
    }
  }

  return parseFloat(strNum);
}

module.exports = {
  generateRandomNumber,
};
