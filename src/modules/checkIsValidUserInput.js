'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
const checkIsUniqueNumbers = (value) => {
  const arrayValue = `${value}`.split('');
  // console.log(arrayValue.length);

  if (arrayValue.length !== 4) {
    // console.log('(arrayValue.length !== 4)');

    return false;
  }

  if (typeof +value !== 'number') {
    // console.log(`(typeof value !== 'number')`);

    return false;
  }

  if (arrayValue[0] === '0') {
    // console.log(`(arrayValue[0] === '0')`);

    return false;
  }

  const arrayValueToCheck = [...arrayValue];

  for (let i = 0; i < arrayValue.length; i++) {
    const numberToCheck = arrayValue[i];

    arrayValueToCheck.splice(i, 1);

    if (arrayValueToCheck.includes(numberToCheck)) {
      // console.log(`arrayValueToCheck.includes(numberToCheck)`);

      return false;
    }

    return true;
  }
};

function checkIsValidUserInput(userInput) {
  /* Write your code here */

  const numberedUserInput = +userInput;

  if (userInput.length !== 4) {
    return false;
  }

  if (typeof numberedUserInput !== 'number' || isNaN(numberedUserInput)) {
    return false;
  }

  if (+userInput[0] === 0) {
    return false;
  }

  return checkIsUniqueNumbers(userInput);
}

module.exports = {
  checkIsValidUserInput,
};
