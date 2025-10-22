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
  let countOfBulls = 0;
  let countOfCows = 0;
  const inputArr = String(userInput).split('');
  const guessArr = String(numberToGuess).split('');

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === guessArr[i]) {
      countOfBulls += 1;
      inputArr[i] = null;
      guessArr[i] = null;
    }
  }

  for (let i = 0; i < inputArr.length; i++) {
    const current = inputArr[i];

    if (current === null) {
      continue;
    }

    const indexInGuess = guessArr.indexOf(current);

    if (indexInGuess !== -1) {
      countOfCows++;
      guessArr[indexInGuess] = null;
    }
  }

  return { bulls: countOfBulls, cows: countOfCows };
}

module.exports = {
  getBullsAndCows,
};
