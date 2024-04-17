/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const randomNumber = +generateRandomNumber();
const terminal = readline.createInterface(process.stdin, process.stdout);

console.log('START', randomNumber);

function askQuestion() {
  terminal.question('Guess the number: ', (playerNumber) => {
    console.log('player:', +playerNumber, 'ans:', randomNumber);

    const isValidPlayerNumber = checkIsValidUserInput(playerNumber);
    const message = getBullsAndCows(+playerNumber, randomNumber);

    if (!isValidPlayerNumber) {
      console.log('NOT VALID NUMBER');

      askQuestion();
    } else if (+playerNumber === randomNumber) {
      // FINISH
      console.log('Congratulations! You guessed the number.');

      terminal.close();
    } else {
      // COWS AND BULLS
      console.log('message:', message);
      askQuestion();
    }
  });
}

askQuestion();
