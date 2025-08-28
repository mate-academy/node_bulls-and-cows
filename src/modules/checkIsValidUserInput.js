'use strict';

function checkIsValidUserInput(userInput) {
  if (typeof userInput !== 'string') {
    return false;
  }

  if (userInput.length !== 4) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  if (!/^\d+$/.test(userInput)) {
    return false;
  }

  for (const ch of userInput) {
    if (userInput.indexOf(ch) !== userInput.lastIndexOf(ch)) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
