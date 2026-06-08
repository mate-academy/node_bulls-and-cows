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
  const inputArray = userInput.split(''); // 1, 2, 3, 4

  if (userInput.length !== 4) {
    return false;
  }

  if (inputArray[0] === '0') {
    return false;
  }

  if (userInput) {
    for (let i = 0; i < inputArray.length; i++) {
      if (isNaN(inputArray[i]) === true) {
        return false;
      }

      for (let y = i + 1; y < inputArray.length; y++) {
        if (inputArray[i] === inputArray[y]) {
          return false;
        }
      }
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
