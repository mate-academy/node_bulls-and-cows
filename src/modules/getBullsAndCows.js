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
  const arrayUserInput = userInput.toString().split('');
  const arrayNumberToGuessInput = numberToGuess.toString().split('');

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < arrayUserInput.length; i++) {
    if (arrayUserInput[i] === arrayNumberToGuessInput[i]) {
      bulls++;
      continue;
    }

    for (
      let countOfNext = 0;
      countOfNext < arrayUserInput.length;
      countOfNext++
    ) {
      if (
        i !== countOfNext &&
        arrayUserInput[i] === arrayNumberToGuessInput[countOfNext]
      ) {
        cows++;
        break;
      }
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  getBullsAndCows,
};
