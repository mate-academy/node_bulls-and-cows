'use strict';

function checkIsValidUserInput(userInput) {
  if (typeof userInput !== 'string') {
    return false;
  }

  if (!/^[1-9]\d{3}$/.test(userInput)) {
    return false;
  }

  const digits = userInput.split('');
  const uniqueDigits = new Set(digits);

  return uniqueDigits.size === 4;
}

module.exports = {
  checkIsValidUserInput,
};
