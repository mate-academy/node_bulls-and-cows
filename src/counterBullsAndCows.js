/* eslint-disable no-console */
'use strict';

const counter = (gameNumber, userNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < gameNumber.length; i++) {
    if (gameNumber[i] === userNumber[i]) {
      bulls++;
    } else if (userNumber.includes(gameNumber[i])) {
      cows++;
    }
  }

  return [bulls, cows];
};

module.exports = { counter };
