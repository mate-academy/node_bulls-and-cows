'use strict';

const getBullsAndCows = (userInput = '', randomNumber = '') => {
  if (typeof(userInput) !== 'string') {
    userInput.toString();
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === randomNumber[i]) {
      bulls++;
    } else if (randomNumber.includes(userInput[i])) {
      cows++;
    }
  }

  return ({
    bulls, cows,
  });
};

module.exports = getBullsAndCows;
