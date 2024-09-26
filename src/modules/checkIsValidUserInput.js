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
  try {
    const userInputArr = userInput.toString().split('');

    if (userInputArr.length !== 4) {
      throw new Error('User input must be a 4-digit number');
    }

    if (userInputArr.some((digit) => isNaN(+digit))) {
      throw new Error('User input must contain only digits');
    }

    if (userInputArr[0] === '0') {
      throw new Error('User input must not start with 0');
    }

    if (new Set(userInputArr).size !== 4) {
      throw new Error('User input must not contain duplicate digits');
    }

    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);

    return false;
  }
}

module.exports = {
  checkIsValidUserInput,
};
