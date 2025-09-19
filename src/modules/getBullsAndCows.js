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
  const user = String(userInput).split('');
  const correct = String(numberToGuess).split('');

  let bulls = 0;
  let cows = 0;

  const correctUsed = [false, false, false, false];
  const userUsed = [false, false, false, false];

  for (let i = 0; i < 4; i++) {
    if (user[i] === correct[i]) {
      bulls++;
      correctUsed[i] = true;
      userUsed[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (userUsed[i]) {
      continue;
    }

    for (let j = 0; j < 4; j++) {
      if (!correctUsed[j] && user[i] === correct[j]) {
        cows++;
        correctUsed[j] = true;
        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
