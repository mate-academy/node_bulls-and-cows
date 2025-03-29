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
  let bulls = 0;
  let cows = 0;

  const userInputArray = userInput.toString().split('');
  const numberToGuessArray = numberToGuess.toString().split('');

  const userInputChecked = [];
  const numberToGuessChecked = [];

  for (let i = 0; i < 4; i++) {
    if (userInputArray[i] === numberToGuessArray[i]) {
      bulls++;
      userInputChecked[i] = true;
      numberToGuessChecked[i] = true;
    } else {
      userInputChecked[i] = false;
      numberToGuessChecked[i] = false;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (!userInputChecked[i]) {
      for (let j = 0; j < 4; j++) {
        if (
          !numberToGuessChecked[j] &&
          userInputArray[i] === numberToGuessArray[j]
        ) {
          cows++;
          numberToGuessChecked[j] = true;
          break;
        }
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
