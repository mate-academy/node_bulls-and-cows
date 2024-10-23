'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {string} userInput
 * @param {string} numberToGuess
 * @return {object}
 */
function getBullsAndCows(userInput, numberToGuess) {
  const fixedUserInput = String(userInput);
  const fixedNumberToGuess = String(numberToGuess);

  let bulls = 0;
  let cows = 0;

  const userNumbers = [];
  const guessNumbers = [];

  for (let i = 0; i < 4; i++) {
    if (fixedUserInput[i] === fixedNumberToGuess[i]) {
      bulls++;
    } else {
      userNumbers.push(fixedUserInput[i]);
      guessNumbers.push(fixedNumberToGuess[i]);
    }
  }

  guessNumbers.forEach((number) => {
    const cowIndex = userNumbers.indexOf(number);

    if (cowIndex !== -1) {
      cows++;
      userNumbers.splice(cowIndex, 1);
    }
  });

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
