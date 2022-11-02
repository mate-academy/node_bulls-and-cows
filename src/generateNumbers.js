'use strict';

function getRandomNumber() {
  const randomNumber = Math.random().toString();
  let result = '';

  for (let i = randomNumber.length - 1; i >= 0; i--) {
    if (!result.includes(randomNumber[i]) && result.length < 4) {
      result += randomNumber[i];
    }

    if (result.length === 4) {
      break;
    }
  }

  return result;
}

module.exports = { getRandomNumber };
