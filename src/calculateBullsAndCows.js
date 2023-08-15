'use strict';

function calculateBullsAndCows(num, randomNum) {
  const stringifyNum = num.toString();
  const stringifyRandom = randomNum.toString();
  const sortedNum = stringifyNum.split('')
    .sort((a, b) => +a - +b)
    .join('');
  const sortedRandom = stringifyRandom.split('')
    .sort((a, b) => +a - +b)
    .join('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < sortedRandom.length; i++) {
    if (sortedRandom[i] === sortedNum[i]) {
      cows += 1;
    }
  }

  for (let i = 0; i < stringifyNum.length; i++) {
    if (stringifyNum[i] === stringifyRandom[i]) {
      bulls += 1;
      continue;
    }
  }

  return {
    bulls,
    cows: cows - bulls,
  };
}

module.exports = {
  calculateBullsAndCows,
};
