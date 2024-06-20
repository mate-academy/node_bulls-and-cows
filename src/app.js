/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();
let attempt = 1;

function handleInvalidInput() {
  terminal.question('Please enter the correct number\n', game);
}

function handleCorrectGuess() {
  console.log(`You guessed the number in ${attempt} attempt(s)\n`);
  attempt = 1;
  terminal.close();
}

function handleIncorrectGuess(userInput) {
  console.log(getBullsAndCows(Number(userInput), randomNumber));
  attempt++;
  terminal.question('Nice try.\nTry to guess the whole number\n', game);
}

function game(userInput) {
  if (!checkIsValidUserInput(userInput)) {
    handleInvalidInput();
  } else if (Number(userInput) === randomNumber) {
    handleCorrectGuess();
  } else {
    handleIncorrectGuess(userInput);
  }
}

function startGame() {
  terminal.question('Enter a number with 4 different digits\n', game);
}

startGame();
