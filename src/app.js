'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function playGame() {
  rl.question('Guess the number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      // eslint-disable-next-line
      console.error('Input value is not correct');
      // eslint-disable-next-line
      console.error('Possibly not a number,');
      // eslint-disable-next-line
      console.error('or contains not 4-digit number or digits are repeated)');
      // eslint-disable-next-line
      console.error('or digits are repeated)');

      playGame();
    } else {
      const bullsAndCows = getBullsAndCows(userInput, numberToGuess);

      // eslint-disable-next-line
      console.log(bullsAndCows);

      if (+userInput === numberToGuess) {
        // eslint-disable-next-line
        console.log('You win!');
        rl.close();
      } else {
        // eslint-disable-next-line
        console.log('Incorrect number!\nTry again');
        playGame();
      }
    }
  });
}

playGame();
