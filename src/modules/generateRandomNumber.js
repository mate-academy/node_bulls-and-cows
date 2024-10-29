'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let resultStr = '';

  while (resultStr.length < 4) {
    const randomDigitStr = String(Math.floor(Math.random() * 10));

    if (resultStr.length === 0) {
      if (randomDigitStr !== '0') {
        resultStr += randomDigitStr;
      }
    } else if (!resultStr.includes(randomDigitStr)) {
      resultStr += randomDigitStr;
    }
  }

  return +resultStr;
}

module.exports = {
  generateRandomNumber,
};
