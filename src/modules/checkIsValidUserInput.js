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
  const numberLength = 4;
  const input = userInput.split('');
  const notRepeatedChs = [];

  for (const ch of input) {
    if (notRepeatedChs.includes(ch)) {
      return false;
    }

    notRepeatedChs.push(ch);
  }

  return input.length === numberLength
    && input[0] !== '0'
    && input.every(ch => !isNaN(Number(ch)));
}

module.exports = {
  checkIsValidUserInput,
};
