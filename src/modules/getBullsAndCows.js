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
  const userArr = String(userInput).split('');
  const secretArr = String(numberToGuess).split('');

  let bulls = 0;
  let cows = 0;

  const secretCheck = [...secretArr];
  const userCheck = [...userArr];

  for (let i = 0; i < 4; i++) {
    if (userArr[i] === secretArr[i]) {
      bulls++;
      secretCheck[i] = null;
      userCheck[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (userCheck[i] !== null) {
      const cowIndex = secretCheck.indexOf(userCheck[i]);

      if (cowIndex !== -1) {
        cows++;
        secretCheck[cowIndex] = null;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
