'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let result = '';

  while (result.length < 4) {
    const randomNum = Math.floor(Math.random() * 10);
    const randomNumStr = String(randomNum);

    if (result.length === 0 && randomNumStr === '0') {
      continue;
    }

    if (!result.includes(randomNumStr)) {
      result += randomNumStr;
    }
  }

  return Number(result);
}

module.exports = {
  generateRandomNumber,
};
