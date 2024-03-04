'use strict';

function checkIsValidUserInput(userInput) {
  const inputSet = new Set(userInput);

  if (userInput.length < 4
    || inputSet.size < 4
    || userInput[0] === '0'
    || isNaN(userInput)
    || userInput.length > 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
