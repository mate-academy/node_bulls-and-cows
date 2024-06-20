/* eslint-disable no-console */
'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  if (isNaN(userInput)) {
    console.log('Invalid input: this is NOT a number');

    return false;
  }

  if (userInput / 1000 < 1 || userInput / 1000 >= 10) {
    console.log('Invalid input: it DO NOT contain 4 numbers');

    return false;
  }

  const numberArr = userInput.toString().split('');
  const newArr = [...new Set(numberArr)];

  if (newArr.length !== 4) {
    console.log('Invalid input: DO NOT repeat numbers');

    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
