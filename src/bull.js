'use strict';

const { randomNumber } = require('./getRandomNumber');

function bull(enteredNumber) {
  let bulls = 0;

  for (let i = 0; i < randomNumber.length; i++) {
    if (enteredNumber[i] === randomNumber[i]) {
      bulls++;
    }
  }

  return bulls;
}

module.exports = { bull };
