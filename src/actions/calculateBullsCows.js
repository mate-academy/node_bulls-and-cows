'use strict';

const calculateBullsCows = (toGuess, playerInput) => {
  const toGuessArray = String(toGuess).split('');
  const playerInputArray = String(playerInput).split('');

  const count = {
    bulls: 0, cows: 0,
  };

  for (let i = 0; i < toGuessArray.length; i++) {
    if (toGuessArray[i] === playerInputArray[i]) {
      count.bulls += 1;
    } else if (toGuessArray.includes(playerInputArray[i])) {
      count.cows += 1;
    }
  }

  return count;
};

module.exports = { calculateBullsCows };
