'use strict';

const calculateBullsAndCows = (num, guess) => {
  const numArr = num.toString().split('');
  const guessArr = guess.toString().split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (numArr[i] === guessArr[i]) {
      bulls++;
    } else if (numArr.includes(guessArr[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = { calculateBullsAndCows };
