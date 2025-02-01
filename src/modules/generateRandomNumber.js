'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber = '';

  while (randomNumber.length < 4) {
    const singleNum = Math.floor(Math.random() * 10);

    if (
      (randomNumber.length > 0 || singleNum !== 0) &&
      !randomNumber.includes(singleNum)
    ) {
      randomNumber += singleNum;
    }
  }

  return Number(randomNumber);
}

export default generateRandomNumber;
