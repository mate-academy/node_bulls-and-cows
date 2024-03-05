'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gameNumber = generateRandomNumber();

console.log(gameNumber);

function startGame() {
  rl.question('Guess number: ', (guess) => {
    if (checkIsValidUserInput(guess)) {
      if (parseInt(guess) === gameNumber) {
        console.log('Winner');
        rl.close();
      } else {
        const answer = getBullsAndCows(guess, gameNumber);

        console.log(answer);
        startGame();
      }
    } else {
      console.log('Invalid number');
      startGame();
    }
  });
}

startGame();
