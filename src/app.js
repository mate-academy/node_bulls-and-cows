/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

const randomNumber = generateRandomNumber();

let attempt = 1;

function game(userInput) {
  if (!checkIsValidUserInput(userInput)) {
    return terminal.question('Please enter the correct number\n', game);
  }

  if (Number(userInput) === randomNumber) {
    console.log(`You guessed the number from ${attempt} attempt/s\n`);
    attempt = 1;
    terminal.close();
  } else {
    console.log(getBullsAndCows(Number(userInput), randomNumber));
    attempt++;

    return terminal.question(
      'Nice try.\n Try to guess the whole number\n',
      game,
    );
  }
}

function startGame() {
  return terminal.question(`Enter a number with 4 different digits\n`, game);
}

startGame();
