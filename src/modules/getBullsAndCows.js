'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const result = { bulls: 0, cows: 0 };
  const userStr = userInput.toString();
  const guessArr = numberToGuess.toString().split('');

  for (let i = 0; i < 4; i++) {
    if (userStr[i] === guessArr[i]) {
      result.bulls += 1;
      guessArr[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (userStr[i] !== guessArr[i]) {
      const index = guessArr.indexOf(userStr[i]);

      if (index !== -1) {
        result.cows += 1;
        guessArr[index] = null;
      }
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
