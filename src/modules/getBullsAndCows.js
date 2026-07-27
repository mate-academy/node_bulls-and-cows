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
  const userStr = String(userInput);
  const guessStr = String(numberToGuess);

  let bulls = 0;
  let cows = 0;

  const usedSecretPositions = [false, false, false, false];
  const usedUserPositions = [false, false, false, false];

  for (let i = 0; i < 4; i++) {
    if (userStr[i] === guessStr[i]) {
      bulls++;
      usedSecretPositions[i] = true;
      usedUserPositions[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (!usedUserPositions[i]) {
      for (let j = 0; j < 4; j++) {
        if (!usedSecretPositions[j] && userStr[i] === guessStr[j]) {
          cows++;
          usedSecretPositions[j] = true;
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
