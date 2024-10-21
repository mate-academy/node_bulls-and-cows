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
  if (userInput.length !== 4) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  const arr = [...userInput];

  for (const num of arr) {
    if (arr.filter((number) => number === num).length > 1 || isNaN(+num)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
