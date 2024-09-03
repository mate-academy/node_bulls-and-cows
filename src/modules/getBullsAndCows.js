'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const input = String(userInput);
  const guess = String(numberToGuess);
  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < guess.length; i++) {
    if (input.match(guess[i])) {
      if (input.indexOf(guess[i]) === i) {
        bullsAndCows.bulls += 1;
      } else {
        bullsAndCows.cows += 1;
      }
    }
  }

  return bullsAndCows;
}

module.exports = {
  getBullsAndCows,
};
