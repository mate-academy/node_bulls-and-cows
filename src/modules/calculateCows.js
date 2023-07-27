'use strict';

const calculateCows = (targetNum, guessNumber) => {
  const cowsCount = targetNum
    .split('')
    .reduce((total, digit, idx) => {
      const digitIsExist = guessNumber.includes(digit);

      if (digitIsExist && (targetNum[idx] !== guessNumber[idx])) {
        return total + 1;
      }

      return total;
    }, 0);

  return cowsCount;
};

module.exports = { calculateCows };
