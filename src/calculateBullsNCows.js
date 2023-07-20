'use strict';

function calculateBullsNCows(numberToGuess, passedSequence) {
  const bullsNCows = {
    bulls: 0,
    cows: 0,
  };

  const sequenceToGuess = numberToGuess.toString();

  for (let i = 0; i < sequenceToGuess.length; i++) {
    if (sequenceToGuess[i] === passedSequence[i]) {
      bullsNCows.bulls++;
      continue;
    }

    if (sequenceToGuess.includes(passedSequence[i])) {
      bullsNCows.cows++;
    }
  }

  return bullsNCows;
}

module.exports = { calculateBullsNCows };
