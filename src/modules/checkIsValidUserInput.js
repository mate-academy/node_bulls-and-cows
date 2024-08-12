'use strict';

function checkIsValidUserInput(userInput) {
  const isNumeric = /^\d+$/.test(userInput);

  if (!isNumeric) {
    return false;
  }

  if (userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  const isDuplicates = new Set(userInput).size === 4;

  if (!isDuplicates) {
    return false;
  }

  return true;
}

checkIsValidUserInput();

module.exports = {
  checkIsValidUserInput,
};
