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
  const resultObj = { bulls: 0, cows: 0 };

  const userInputArr = String(userInput).split('').map(Number);
  const numberToGuessArr = String(numberToGuess).split('').map(Number);

  const usedInGuess = Array(4).fill(false);
  const usedInInput = Array(4).fill(false);

  for (let i = 0; i < 4; i++) {
    if (userInputArr[i] === numberToGuessArr[i]) {
      resultObj.bulls++;
      usedInGuess[i] = true;
      usedInInput[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (usedInInput[i]) {
      continue;
    }

    for (let j = 0; j < 4; j++) {
      if (!usedInGuess[j] && userInputArr[i] === numberToGuessArr[j]) {
        resultObj.cows++;
        usedInGuess[j] = true;
        break;
      }
    }
  }

  return resultObj;
}

module.exports = {
  getBullsAndCows,
};
