'use strict';

const { Random } = require('random-js');
const random = new Random();

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = random.shuffle([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]);

  if (digits[0] === '0') {
    const i = digits.findIndex((d) => d !== '0');

    [digits[0], digits[i]] = [digits[i], digits[0]];
  }

  return Number(digits.slice(0, 4).join(''));
}

module.exports = {
  generateRandomNumber,
};
