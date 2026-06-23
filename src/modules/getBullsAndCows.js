'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const arFromUserInput = Array.from(String(userInput), Number);
  const arFromNumberToGuess = Array.from(String(numberToGuess), Number);

  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i++) {
    if (arFromUserInput[i] === arFromNumberToGuess[i]) {
      result.bulls += 1;
    } else if (arFromNumberToGuess.includes(arFromUserInput[i])) {
      result.cows += 1;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
