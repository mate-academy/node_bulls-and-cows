'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

function startGame() {
  const numberToGuess = generateRandomNumber();

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askForGuess() {
    readline.question('Enter your guess: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        askForGuess();

        return;
      }

      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      // eslint-disable-next-line no-console
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        readline.close();
      } else {
        askForGuess();
      }
    });
  }

  askForGuess();
}

startGame();
