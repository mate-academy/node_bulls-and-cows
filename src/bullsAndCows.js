'use strict';

const { generateRandomNumber } = require('./randomNumber');
const generatedNumber = generateRandomNumber();

const countBullsAndCows = (userNumberArr) => {
  let bulls = 0;
  let cows = 0;

  userNumberArr.forEach((el, i) => {
    if (el === generatedNumber[i]) {
      bulls++;

      return;
    }

    if (generatedNumber.includes(el)) {
      cows++;
    }
  });

  return `${bulls} Bulls ${cows} Cows`;
};

module.exports = { countBullsAndCows };
