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
  const userInputString = `${userInput}`;
  const numberToGuessString = `${numberToGuess}`;
  const bullsCowsObject = { bulls: 0, cows: 0 };

  const userInputArray = userInputString.split('');
  const numberToGuessArray = numberToGuessString.split('');

  userInputArray.forEach((char, index) => {
    if (char === numberToGuessArray[index]) {
      bullsCowsObject.bulls++;
    } else if (numberToGuessArray.includes(char)) {
      bullsCowsObject.cows++;
    }
  });

  return bullsCowsObject;
}

module.exports = {
  getBullsAndCows,
};
