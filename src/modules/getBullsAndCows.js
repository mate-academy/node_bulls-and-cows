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

  const secretArr = numberToGuess.toString().split('');
  const guessArr = userInput.toString().split('');

  const usedSecretIndexes = new Set();
  const usedGuessIndexes = new Set();

  // bulls
  for (let i = 0; i < 4; i++) {
    if (guessArr[i] === secretArr[i]) {
      bulls++;
      usedSecretIndexes.add(i);
      usedGuessIndexes.add(i);
    }
  }

  // cows
  for (let i = 0; i < 4; i++) {
    if (usedGuessIndexes.has(i)) {
      continue;
    }

    for (let j = 0; j < 4; j++) {
      if (usedSecretIndexes.has(j)) {
        continue;
      }

      if (guessArr[i] === secretArr[j]) {
        cows++;
        usedSecretIndexes.add(j);
        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
