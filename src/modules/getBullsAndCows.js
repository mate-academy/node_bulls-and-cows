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
  const mapper = { bulls: 0, cows: 0 };
  const userInputStr = userInput.toString();
  const numberToGuessStr = numberToGuess.toString();

  const unmatchedUserInput = [];
  const unmatchedNumberToGuess = [];

  for (let i = 0; i < 4; i++) {
    if (userInputStr[i] === numberToGuessStr[i]) {
      mapper.bulls++;
    } else {
      unmatchedUserInput.push(userInputStr[i]);
      unmatchedNumberToGuess.push(numberToGuessStr[i]);
    }
  }

  unmatchedUserInput.forEach((digit) => {
    const index = unmatchedNumberToGuess.indexOf(digit);

    if (index !== -1) {
      mapper.cows++;
      unmatchedNumberToGuess.splice(index, 1);
    }
  });

  return mapper;
}

module.exports = {
  getBullsAndCows,
};
