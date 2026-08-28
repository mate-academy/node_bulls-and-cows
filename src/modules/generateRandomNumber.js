'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const randomGameNum = new Set();

  while (randomGameNum.size < 4) {
    const num = Math.floor(Math.random() * 10);

    if (num === 0 && randomGameNum.size === 0) {
      continue;
    }

    randomGameNum.add(num);
  }

  const finalNumber = Number([...randomGameNum].join(''));
  let finalString = String(finalNumber);

  if (finalString.length < 4) {
    finalString = finalString.padStart(4, '0');
  }

  return +finalString;
}

module.exports = {
  generateRandomNumber,
};
