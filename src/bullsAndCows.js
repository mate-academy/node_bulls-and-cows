'use strict';

exports.calculateBullsCows = (winNumber, playerNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (playerNumber[i] === winNumber[i]) {
      bulls++;
    }

    if (winNumber.includes(playerNumber[i])) {
      cows++;
    }
  }

  if (bulls > 0 && cows > 0) {
    cows = cows - bulls;
  }

  return {
    bulls, cows,
  };
};
