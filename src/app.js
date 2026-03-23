/* eslint-disable no-console */
'use strict';

const { createInterface } = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numToGuess = generateRandomNumber();

console.log(
  "Let's play a game. \n I guess the 4-digit number, and you have to guess it.",
);

function playTurn() {
  rl.question('Enter your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      return playTurn();
    }

    if (String(answer) === String(numToGuess)) {
      console.log('\nYou win!\n ');

      rl.close();

      return;
    }

    const result = getBullsAndCows(answer, numToGuess);

    console.log(result);

    playTurn();
  });
}

playTurn();
