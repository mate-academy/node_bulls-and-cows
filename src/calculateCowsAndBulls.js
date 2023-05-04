'use strict';

const calculateBullsAndCows = (randomNumber, userNum) => {
  return userNum.split('').reduce(
    (acc, number, i) => {
      if (randomNumber[i] === number) {
        acc.bulls++;
      } else if (randomNumber.includes(number)) {
        acc.cows++;
      }

      return acc;
    },
    {
      bulls: 0,
      cows: 0,
    }
  );
};

module.exports = { calculateBullsAndCows };
