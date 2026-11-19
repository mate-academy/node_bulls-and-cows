'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = '123456789'.split('');
  const result = [
    digits.splice(Math.floor(Math.random() * digits.length), 1)[0],
  ];

  const remainingDigits = '0123456789'
    .split('')
    .filter((d) => !result.includes(d));

  while (result.length < 4) {
    result.push(
      remainingDigits.splice(
        Math.floor(Math.random() * remainingDigits.length),
        1,
      )[0],
    );
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
