'use strict';

function checkIsValidUserInput(userInput) {
  const inputStr = String(userInput).trim();
  const digitsSet = new Set(inputStr);

  if (
    userInput.length !== 4 ||
    userInput[0] === '0' ||
    digitsSet.size !== 4 ||
    !/^\d{4}$/.test(userInput)
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  checkIsValidUserInput,
};
