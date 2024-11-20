'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  const userInputStr = userInput.toString();
  const userInputSplited = userInputStr.split('');

  const numberToGuessStr = numberToGuess.toString();
  const numberToGuessSplited = numberToGuessStr.split('');

  const bullsMarked = Array(4).fill(false);
  const cowsMarked = Array(4).fill(false);

  for (let i = 0; i < 4; i++) {
    if (userInputSplited[i] === numberToGuessSplited[i]) {
      bullsAndCows.bulls++;
      bullsMarked[i] = true;
      cowsMarked[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (!bullsMarked[i]) {
      for (let j = 0; j < 4; j++) {
        if (!cowsMarked[j] && userInputSplited[i] === numberToGuessSplited[j]) {
          bullsAndCows.cows++;
          cowsMarked[j] = true;
          break;
        }
      }
    }
  }

  return bullsAndCows;
}

module.exports = {
  getBullsAndCows,
};
