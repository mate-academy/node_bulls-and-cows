'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const secretNumber = generateRandomNumber();

  function promptGuess() {
    rl.question('Enter your guess: ', (input) => {
      if (!checkIsValidUserInput(input)) {
        promptGuess();

        return;
      }

      const { bulls } = getBullsAndCows(Number(input), secretNumber);

      if (bulls === 4) {
        rl.close();
      } else {
        promptGuess();
      }
    });
  }

  promptGuess();
}

startGame();
