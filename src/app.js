/* eslint-disable no-console */
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
  rl.question('Вгадайте число від 1 до 10: ', (guess) => {
    if (checkIsValidUserInput(guess)) {
      if (parseInt(guess) === gameNumber) {
        console.log('Ви вгадали!');
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
