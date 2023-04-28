'use strict';

const calculateBullsAndCows = (userGuess, secretNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === userGuess[i]) {
      bulls++;
    } else if (secretNumber.includes(userGuess[i])) {
      cows++;
    }
  }

  return [bulls, cows];
};

module.exports.calculateBullsAndCows = calculateBullsAndCows;
