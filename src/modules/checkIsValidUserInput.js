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
  const respondArray = userInput.split('');

  function isResponceCorrect(responce) {
    const unicueArr = [];

    for (const ch of responce) {
      if (unicueArr.includes(ch) || isNaN(ch)) {
        return false;
      }

      unicueArr.push(ch);
    }

    return true;
  }

  if (
    respondArray.length !== 4 ||
    +respondArray[0] === 0 ||
    !isResponceCorrect(respondArray)
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  checkIsValidUserInput,
};
