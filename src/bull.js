'use strict';

const { randomNumber } = require('./getRandomNumber');

function bull(userInput) {
  let count = 0;

  const arrInput = userInput.split('');
  const arrNumber = randomNumber.split('');

  for (let i = 0; i < arrNumber.length; ++i) {
    if (arrInput[i] === randomNumber[i]) {
      ++count;
    }
  }

  return count;
}

module.exports = { bull };
