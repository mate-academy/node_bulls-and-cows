/* eslint-disable */
'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const firstValidNumber = Math.floor(Math.random() * 9) + 1;
  const listOfRandomNumber = [firstValidNumber, null, null, null];

  for (let i = 1; i < listOfRandomNumber.length; i++) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!listOfRandomNumber.includes(randomNumber)) {
      listOfRandomNumber[i] = randomNumber;
      continue;
    }

    while (listOfRandomNumber.includes(randomNumber)) {
      const randomNumber1 = Math.floor(Math.random() * 10);

      if (!listOfRandomNumber.includes(randomNumber1)) {
        listOfRandomNumber[i] = randomNumber1;
        break;
      }
    }
  }

  return Number(listOfRandomNumber.join(''));
}

module.exports = {
  generateRandomNumber,
};
