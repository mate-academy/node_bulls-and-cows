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
  function hasDuplicates(str) {
    const digitsSeen = {};

    for (let i = 0; i < str.length; i++) {
      const digit = str[i];

      if (digitsSeen[digit]) {
        return true;
      }

      digitsSeen[digit] = true;
    }

    return false;
  }

  if (
    userInput.length === 4 &&
    userInput[0] !== '0' &&
    !isNaN(+userInput) &&
    !hasDuplicates(userInput)
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkIsValidUserInput,
};
