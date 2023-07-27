'use strict';

const calculateBulls = (targetNum, guessNumber) => {
  const bullsCount = targetNum
    .split('')
    .reduce((total, _, idx) => {
      if (targetNum[idx] === guessNumber[idx]) {
        return total + 1;
      }

      return total;
    }, 0);

  return bullsCount;
};

module.exports = { calculateBulls };
