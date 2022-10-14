'use strict';

const { randomNumber } = require('./getRandomNumber');

function cow(enteredNumber) {
  let cows = 0;

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber.includes(enteredNumber[i])) {
      cows++;
    }
  }

  return cows;
}

module.exports = { cow };
