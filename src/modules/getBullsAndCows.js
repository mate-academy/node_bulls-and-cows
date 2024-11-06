'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const res = { bulls: 0, cows: 0 };

  const userInputStr = userInput.toString();
  const numberToGuessStr = numberToGuess.toString();

  for (let i = 0; i < userInputStr.length; i++) {
    if (userInputStr[i] === numberToGuessStr[i]) {
      res.bulls += 1;
      continue;
    }

    if (numberToGuessStr.includes(userInputStr[i])) {
      res.cows += 1;
    }
  }

  return res;
}

module.exports = {
  getBullsAndCows,
};
