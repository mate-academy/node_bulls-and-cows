'use strict';

function checkIsValidUserInput(userInput) {
  if (typeof userInput !== 'string' || userInput.length !== 4) {
    return false;
  }

  if (userInput[0] === '0') {
    return false;
  }

  if (!/^\d{4}$/.test(userInput)) {
    return false;
  }

  const digits = userInput.split('');
  const uniqueDigits = new Set(digits);

  return uniqueDigits.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
