/* eslint-disable no-console */
'use strict';

const getBullsAndCows = (userInput, randomDigits) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === randomDigits[i]) {
      bulls++;
    } else if (randomDigits.includes(userInput[i])) {
      cows++;
    }
  }

  return ({
    bulls, cows,
  });
};

module.exports = getBullsAndCows;
