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
  const normalizedInput = userInput.trim();

  if (normalizedInput.length !== 4) {
    console.log('Please enter 4 digits.');

    return false;
  }

  if (Number.isNaN(+normalizedInput)) {
    console.log('Only digits 0 to 9 are allowed.');

    return false;
  }

  if (normalizedInput[0] === '0') {
    console.log("Number shouldn't start with 0.");

    return false;
  }

  for (let i = 0; i < normalizedInput.length; i++) {
    const currentNum = normalizedInput[i];
    const filteredArr = normalizedInput
      .split('')
      .filter((num) => num !== currentNum);

    if (filteredArr.length !== normalizedInput.length - 1) {
      console.log("Number shouldn't contain any duplicate digits.");

      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
