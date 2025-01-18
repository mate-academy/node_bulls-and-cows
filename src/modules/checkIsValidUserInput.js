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
  const allNums = '0123456789';
  const arr = userInput.toString().split('');

  for (let i = 0; i < arr.length; i++) {
    const arrSpliced = [...arr];

    arrSpliced.splice(i, 1);

    if (!allNums.includes(arr[i]) || arrSpliced.includes(arr[i])) {
      return false;
    }
  }

  if (arr[0] === '0' || arr.length !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
