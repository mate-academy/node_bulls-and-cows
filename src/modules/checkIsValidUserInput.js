'use strict';

function checkIsValidUserInput(userInput) {
  const number = Number(userInput);
  const allNumbers = userInput.split('');

  if (Number.isNaN(number)) {
    return false;
  }

  if (userInput.length !== 4 || userInput[0] === '0') {
    return false;
  }

  const numbersSet = new Set(allNumbers);

  if (numbersSet.size !== 4) {
    return false;
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
