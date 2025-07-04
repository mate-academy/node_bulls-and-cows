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
  const numToGuess = String(numberToGuess);

  let bulls = 0;
  let cows = 0;

  const unmatchedInputIndx = [];
  const unmatchedGuessIndx = [];

  // bulls count
  for (let i = 0; i < input.length; i++) {
    if (input[i] === numToGuess[i]) {
      bulls++;
    } else {
      unmatchedInputIndx.push(i);
      unmatchedGuessIndx.push(i);
    }
  }

  // cows count
  for (const i of unmatchedInputIndx) {
    for (const j of unmatchedGuessIndx) {
      if (input[i] === numToGuess[j]) {
        cows++;

        unmatchedGuessIndx.splice(unmatchedGuessIndx.indexOf(j), 1);
        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
