'use strict';

const checkResults = (guessNumber, randomNumber) => {
  let bulls = 0;
  let cows = 0;

  const guessNumberArr = guessNumber.split('');
  const correctNumberArr = randomNumber.split('');

  guessNumberArr.forEach((digit, index) => {
    if (correctNumberArr[index] === digit) {
      bulls++;
    } else if (correctNumberArr.includes(digit)) {
      cows++;
    }
  });

  return {
    bulls,
    cows,
  };
};

module.exports = {
  checkResults,
};
