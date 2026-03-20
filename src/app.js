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
      console.error(
        'Input value is not correct\n(possibly not a number or contains not 4-digit number or digits are repeated)'
      );

      playGame();
    } else {
      const bullsAndCows = getBullsAndCows(userInput, numberToGuess);
      console.log(bullsAndCows);

      if (+userInput === numberToGuess) {
        console.log('You win!')
        rl.close();
      } else {
        console.log('Incorrect number!\nTry again')
        playGame();
      }
    }
  });
};

playGame();
