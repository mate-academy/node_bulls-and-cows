'use strict';

const getResult = (playerDigits, pcDigits) => {
  let bulls = 0;
  let cows = 0;

  playerDigits.forEach(digit => {
    if (pcDigits.includes(digit)) {
      if (playerDigits.indexOf(digit) === pcDigits.indexOf(digit)) {
        bulls++;
      } else {
        cows++;
      }
    }
  });

  return {
    bulls, cows,
  };
};

module.exports = getResult;
