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
  const userArray = userInput.split('');
  const userUniqArray = Array.from(new Set(userInput));

  if (userUniqArray.length !== userArray.length) {
    return false;
  }

  if (userUniqArray.length !== 4) {
    return false;
  }

  if (+userUniqArray[0] === 0) {
    return false;
  }

  for (let n = 0; n < userUniqArray.length; n++) {
    if (isNaN(Number(userUniqArray[n]))) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
