'use strict';

const countBullsAndCows = (randomNumber, playerNumber) => {
  let countBulls = 0;
  let countCows = 0;

  playerNumber
    .toString()
    .split('')
    .forEach((num, index) => {
      if (randomNumber.includes(num)) {
        if (randomNumber.indexOf(num) === index) {
          countBulls++;
        } else {
          countCows++;
        }
      }
    });

  return {
    countBulls,
    countCows,
  };
};

module.exports = {
  countBullsAndCows,
};
