'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const arr = [];

  for (let i = 0; i < 4; i++) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (i === 0 && randomDigit !== 0 && !arr.includes(randomDigit)) {
      arr.unshift(randomDigit);
    } else if (i !== 0 && !arr.includes(randomDigit)) {
      arr.push(randomDigit);
    } else {
      i -= 1;
    }
  }

  return +arr.join('');
}

module.exports = {
  generateRandomNumber,
};
