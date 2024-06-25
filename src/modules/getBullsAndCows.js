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
  const inputStr = userInput.toString();
  const guessStr = numberToGuess.toString();
  let bulls = 0;
  let cows = 0;

  const guessArr = guessStr.split('');
  const inputArr = inputStr.split('');

  const markedGuess = guessArr.map((char, index) => {
    if (char === inputArr[index]) {
      bulls++;

      return null;
    }

    return char;
  });

  inputArr.forEach((char, index) => {
    if (char !== guessArr[index] && markedGuess.includes(char)) {
      cows++;
      markedGuess[markedGuess.indexOf(char)] = null;
    }
  });

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
