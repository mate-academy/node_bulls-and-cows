'use strict';

function checkIsValidUserInput(userInput) {
  if (isNaN(Number(userInput))) {
    return false;
  }

  if (userInput.length !== 4) {
    return false;
  }

  if (+userInput[0] === 0) {
    return false;
  }

  const uniqueNumbers = new Set();

  for (const num of userInput) {
    if (uniqueNumbers.has(num)) {
      return false;
    }

    uniqueNumbers.add(num);
  }

  return userInput.length === uniqueNumbers.size;
}

module.exports = {
  checkIsValidUserInput,
};
