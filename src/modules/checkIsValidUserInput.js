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
  /* Write your code here */

  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  if (userInput.toString()[0] === '0') {
    return false;
  }

  const uniqueNumber = userInput
    .toString()
    .split('')
    .reduce((acum, value) => {
      if (!acum.includes(value)) {
        return acum.concat(value);
      }

      return acum;
    });

  if (uniqueNumber.length < 4) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  checkIsValidUserInput,
};
