'use strict';

function cowsAndBulls(winNum, inputNum) {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < 4; i++) {
    if (winNum[i] === inputNum[i]) {
      bulls++;
    } else if (winNum.includes(inputNum[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = { cowsAndBulls };
