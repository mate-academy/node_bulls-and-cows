'use strict';

function cowsAndBulls(winStr, input) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (input[i] === winStr[i]) {
      bulls++;
    } else if (winStr.includes(input[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = {
  cowsAndBulls,
};
