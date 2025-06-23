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
  const input = String(userInput);
  const guess = String(numberToGuess);

  let bulls = 0;
  let cows = 0;

  const inputUsed = new Array(4).fill(false);
  const guessUsed = new Array(4).fill(false);

  for (let i = 0; i < 4; i++) {
    if (input[i] === guess[i]) {
      bulls++;
      inputUsed[i] = true;
      guessUsed[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (inputUsed[i]) {
      continue;
    }

    for (let j = 0; j < 4; j++) {
      if (guessUsed[j]) {
        continue;
      }

      if (input[i] === guess[j]) {
        cows++;
        guessUsed[j] = true;
        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = { getBullsAndCows };
