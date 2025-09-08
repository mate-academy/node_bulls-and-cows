'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const res = {
    bulls: 0,
    cows: 0,
  };

  const userInputArr = userInput.toString().split('');
  const numberToGuessArr = numberToGuess.toString().split('');

  const usedGuess = [false, false, false, false];
  const usedSecret = [false, false, false, false];

  userInputArr.forEach((digit, i) => {
    if (digit === numberToGuessArr[i]) {
      res.bulls++;
      usedGuess[i] = true;
      usedSecret[i] = true;
    }
  });

  userInputArr.forEach((digit, i) => {
    if (usedGuess[i]) {
      return;
    }

    numberToGuessArr.forEach((secretDigit, j) => {
      if (!usedSecret[j] && digit === secretDigit) {
        res.cows++;
        usedSecret[j] = true;
      }
    });
  });

  return res;
}

module.exports = {
  getBullsAndCows,
};
