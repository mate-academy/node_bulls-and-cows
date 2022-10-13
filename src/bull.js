'use strict';

const { randomNumber: number } = require('./getRandomNumber');

function bull(userInput) {
  let count = 0;

  for (let i = 0; i < number.length; ++i) {
    if (userInput[i] === number[i]) {
      ++count;
    }
  }

  return count;
}

module.exports = { bull };
