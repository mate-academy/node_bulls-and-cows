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
  const arrNums = userInput.split('');
  const length = 4;

  if (arrNums.length !== length || arrNums[0] === '0') {
    return false;
  }

  for (let i = 0; i < arrNums.length; i++) {
    const char = arrNums[i];

    if (!(char >= '0' && char <= '9')) {
      return false;
    }

    for (let j = i + 1; j < arrNums.length; j++) {
      if (char === arrNums[j]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
