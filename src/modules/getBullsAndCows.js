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
  const userInputStr = String(userInput);
  const numberToGuessStr = String(numberToGuess);

  let bulls = 0;
  let cows = 0;

  const userInputUsed = Array(4).fill(false);
  const guessNumUsed = Array(4).fill(false);

  for (let i = 0; i < 4; i++) {
    if (userInputStr[i] === numberToGuessStr[i]) {
      bulls++;

      userInputUsed[i] = true;
      guessNumUsed[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (userInputUsed[i]) {
      continue;
    }

    for (let j = 0; j < 4; j++) {
      if (guessNumUsed[j]) {
        continue;
      }

      if (userInputStr[i] === numberToGuessStr[j]) {
        cows++;

        guessNumUsed[j] = true;

        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
