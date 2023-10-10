'use strict';

const { NUMBER_SIZE } = require('../constants');

const getBullsCows = (playerNumber, numberToGues) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < NUMBER_SIZE; i++) {
    if (playerNumber[i] === numberToGues[i]) {
      bulls++;
    }

    if (numberToGues.includes(playerNumber[i])) {
      cows++;
    }
  }

  cows -= bulls;

  return {
    bulls,
    cows,
  };
};

module.exports = getBullsCows;
