'use strict';

const { randomNum } = require('./randomNum.js');

function countBullsAndCows(inputNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < inputNumber.length; i++) {
    if (inputNumber[i] === randomNum[i]) {
      bulls++;
    } else if (randomNum.includes(inputNumber[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};

module.exports = { countBullsAndCows };
