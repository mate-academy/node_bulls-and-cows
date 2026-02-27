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
  const inputDigits = String(userInput).split('');
  const guessDigits = String(numberToGuess).split('');

  let bulls = 0;
  let cows = 0;

  const remainingInput = [];
  const remainingGuess = [];

  // First pass — bulls
  for (let i = 0; i < 4; i += 1) {
    if (inputDigits[i] === guessDigits[i]) {
      bulls += 1;
    } else {
      remainingInput.push(inputDigits[i]);
      remainingGuess.push(guessDigits[i]);
    }
  }

  // Second pass — cows
  remainingInput.forEach((digit) => {
    const index = remainingGuess.indexOf(digit);

    if (index !== -1) {
      cows += 1;
      remainingGuess.splice(index, 1); // remove used digit
    }
  });

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
