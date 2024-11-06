'use strict';

function checkIsValidUserInput(userInput) {
  if (userInput.toLowerCase() !== userInput.toUpperCase()) {
    return false;
  }

  const normalizeNum = +userInput;

  if (normalizeNum.toString().length !== 4) {
    return false;
  }

  for (let i = 0; i < userInput.length; i++) {
    if (i !== userInput.lastIndexOf(userInput[i])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
