'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */

function hasRepeatingdigits(numStr) {
  for (let i = 0; i < numStr.length; i++) {
    if (numStr.substring(i + 1).includes(numStr[i])) {
      return true;
    }
  }

  return false;
}

function checkIsValidUserInput(userInput) {
  // if (
  //   userInput.length !== 4 ||
  //   parseFloat(userInput[0]) === 0 ||
  //   hasRepeatingdigits(userInput)
  // ) {
  //   return false;
  // }

  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  if (userInput[0] === '0' || hasRepeatingdigits(userInput)) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
