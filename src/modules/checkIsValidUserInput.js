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
  if (+userInput[0] === 0) {
    process.stdout.write('Input shouldn\'t start with zero\n');

    return false;
  }

  if (userInput.length !== 4) {
    process.stdout.write('Input should contain exactly 4 digits\n');

    return false;
  }

  const previousNumbers = [];

  for (const digit of userInput) {
    if (isNaN(+digit) || previousNumbers.includes(digit)) {
      process.stdout.write('All digits should be unique\n');

      return false;
    }

    previousNumbers.push(digit);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
