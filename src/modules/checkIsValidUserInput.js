'use strict';

function checkIsValidUserInput(userInput) {
  const regex = /^[1-9]\d{3}$/;

  if (!regex.test(userInput)) {
    return false;
  }

  const digits = new Set();

  for (const digit of userInput) {
    if (digits.has(digit)) {
      return false;
    }
    digits.add(digit);
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
