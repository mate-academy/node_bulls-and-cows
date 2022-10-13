'use strict';

const { randomNumber: number } = require('./getRandomNumber');

function cow(userInput) {
  let count = 0;

  for (let i = 0; i < number.length; ++i) {
    if (userInput[i] !== number[i] && number.includes(userInput[i])) {
      ++count;
    }
  }

  return count;
}

module.exports = { cow };
