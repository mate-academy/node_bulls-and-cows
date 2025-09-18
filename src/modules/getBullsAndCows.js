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
  const guess = String(userInput);
  const secret = String(numberToGuess);

  let bulls = 0;
  let cows = 0;

  const secretRest = [];
  const guessRest = [];

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else {
      secretRest.push(secret[i]);
      guessRest.push(guess[i]);
    }
  }

  for (const digit of guessRest) {
    const idx = secretRest.indexOf(digit);

    if (idx !== -1) {
      cows++;
      secretRest.splice(idx, 1);
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
