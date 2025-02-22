'use strict';

function checkIsValidUserInput(userInput) {
  const uniqueNumbers = [...new Set(userInput)];
  const DIGITS = 4;

  const isUnique =
    uniqueNumbers.length === DIGITS &&
    uniqueNumbers.every((n) => !isNaN(Number(n)));
  const isStartWithNull = +`${userInput}`[0] !== 0;

  return isUnique && isStartWithNull;
}

module.exports = {
  checkIsValidUserInput,
};
