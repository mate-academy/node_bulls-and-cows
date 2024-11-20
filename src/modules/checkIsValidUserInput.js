'use strict';

function checkIsValidUserInput(userInput) {
  if (typeof userInput !== 'string' || userInput.length !== 4) {
    return false;
  }

  const userInputSplited = userInput.split('');

  if (userInputSplited[0] === '0') {
    return false;
  }

  for (let i = 0; i < userInputSplited.length; i++) {
    if (isNaN(userInputSplited[i])) {
      return false;
    }
  }

  const uniqueDigits = new Set(userInputSplited);

  if (userInputSplited.length !== uniqueDigits.size) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
