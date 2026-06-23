'use strict';

function checkIsValidUserInput(userInput) {
  const digits = userInput.toString().split('');

  if (digits.length !== 4) {
    return false;
  }

  if (digits[0] === '0') {
    return false;
  }

  if (new Set(digits).size !== 4) {
    return false;
  }

  if (isNaN(Number(userInput))) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
