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
function getBullsAndCows(userInput, gameInput) {
  const userArray = userInput.toString().split('').map(Number);
  const gameArray = gameInput.toString().split('').map(Number);

  const result = {
    bulls: 0,
    cows: 0,
  };

  const tempGame = [...gameArray];
  const tempUser = [...userArray];

  tempUser.forEach((n, i) => {
    if (n === tempGame[i]) {
      result.bulls++;
      tempGame[i] = null;
      tempUser[i] = null;
    }
  });

  tempUser.forEach((n) => {
    if (n !== null) {
      const idx = tempGame.indexOf(n);

      if (idx !== -1) {
        result.cows++;
        tempGame[idx] = null;
      }
    }
  });

  return result;
}

module.exports = {
  getBullsAndCows,
};
