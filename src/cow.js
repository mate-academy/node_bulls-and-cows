'use strict';

const { randomNumber } = require('./getRandomNumber');

function cow(userInput) {
  let count = 0;

  const arrInput = userInput.split('');
  const arrNumber = randomNumber.split('');

  for (let i = 0; i < arrInput.length; i++) {
    for (let j = 0; j < arrNumber.length; j++) {
      if (arrInput[i] === arrNumber[j]) {
        count += 1;
      }
    }
  }

  return count;
}

module.exports = { cow };
