'use strict';

const { randomNumber } = require('./getRandomNumber');

function bull(userInput) {
  let count = 0;

  const arrInput = userInput.split('');
  const arrNumber = randomNumber.split('');

  arrInput.filter((value, index) => {
    if (value === arrNumber[index]) {
      ++count;
    }
  });

  return count;
}

module.exports = { bull };
