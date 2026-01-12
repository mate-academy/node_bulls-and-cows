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
  const x = userInput.toString();
  const y = numberToGuess.toString();

  let bulls = 0;
  let cows = 0;

  const usedInUser = [false, false, false, false];
  const usedInGuess = [false, false, false, false];

  for (let i = 0; i < 4; i++) {
    if (x[i] === y[i]) {
      bulls++;
      usedInUser[i] = true;
      usedInGuess[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (usedInUser[i]) {
      continue;
    }

    for (let j = 0; j < 4; j++) {
      if (usedInGuess[j]) {
        continue;
      }

      if (x[i] === y[j]) {
        cows++;
        usedInUser[i] = true;
        usedInGuess[j] = true;
        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
