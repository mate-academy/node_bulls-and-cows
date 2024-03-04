'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  const inputStr = `${userInput}`;
  const numberToGuessStr = `${numberToGuess}`;

  for (let i = 0; i < inputStr.length; i++) {
    if (
      numberToGuessStr.includes(inputStr[i])
      && inputStr.indexOf(inputStr[i]) !== numberToGuessStr.indexOf(inputStr[i])
    ) {
      bullsAndCows.cows++;
    }

    if (
      inputStr.indexOf(inputStr[i]) === numberToGuessStr.indexOf(inputStr[i])
    ) {
      bullsAndCows.bulls++;
    }
  }

  return bullsAndCows;
}

module.exports = {
  getBullsAndCows,
};
