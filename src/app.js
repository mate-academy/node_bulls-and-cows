'use strict';

const { playRound } = require('./bullsAndCowsCalculator');
const { generateSecretNumbers } = require('./numberGenerator');
const { gameInput, gameOutput } = require('./gameIO');

const secret = generateSecretNumbers();

while (true) {
  try {
    const guess = gameInput();

    const [isGameOver, resultOfRound] = playRound(guess, secret);

    if (isGameOver) {
      gameOutput('You win');
      break;
    }

    gameOutput(resultOfRound);
  } catch (exception) {
    gameOutput(exception.message);
  }
}
