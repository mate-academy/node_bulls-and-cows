'use strict';

function checkIsValidUserInput(userInput) {
  if (userInput.length !== 4 || userInput.toString()[0] === '0') {
    return false;
  }

  for (let i = 0; i < userInput.length; i++) {
    const inputToNum = +userInput;

    if ((userInput.slice(0, i) + userInput.slice(i + 1))
      .includes(userInput[i]) || isNaN(inputToNum) || inputToNum === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
