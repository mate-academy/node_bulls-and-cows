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
  // Перетворюємо на масив цифр
  const userArr = Array.isArray(userInput)
    ? userInput
    : String(userInput).split('').map(Number);

  const guessArr = Array.isArray(numberToGuess)
    ? numberToGuess
    : String(numberToGuess).split('').map(Number);

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (userArr.includes(guessArr[i])) {
      if (userArr[i] === guessArr[i]) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
