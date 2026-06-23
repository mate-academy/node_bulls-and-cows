'use strict';

function checkIsValidUserInput(userInput) {
  if (!userInput | (userInput.length !== 4)) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  if (!/^\d+$/.test(userInput)) {
    return false;
  }

  for (const n of userInput) {
    if (userInput.indexOf(n) !== userInput.lastIndexOf(n)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
