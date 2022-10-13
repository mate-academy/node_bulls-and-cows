'use strict';

const { randomNumber } = require('./getRandomNumber');

function cow(userInput) {
  let count = 0;

  const arrInput = userInput.split('');
  const arrNumber = randomNumber.split('');

  for (let i = 0; i < arrNumber.length; ++i) {
    if (arrInput[i] !== arrNumber[i] && arrNumber.includes(arrInput[i])) {
      ++count;
    }
  }

  return count;
}

module.exports = { cow };
