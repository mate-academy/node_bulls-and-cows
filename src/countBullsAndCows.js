'use strict';

const countBullsAndCows = (randomNumber, playerNumber) => {
  let countBulls = 0;
  let countCows = 0;

  playerNumber
    .toString()
    .split('')
    .forEach((num, index) => {
      const indexNum = randomNumber.indexOf(num);

      if (indexNum === index) {
        countBulls++;

        return;
      }

      if (indexNum !== -1) {
        countCows++;
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
