/* eslint-disable no-console */
'use strict';

const rl = require('readline');
const { generateNumber } = require('./generateNumber');
const { calculating } = require('./calculating');

const number = generateNumber();

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame(startMessage) {
  terminal.question(startMessage, (answer) => {
    const { bulls, cows } = calculating(number, answer);

    if (answer.length !== 4) {
      console.log(`Should be a 4-digit number, you entered ${answer.length}\n`);
      playGame('Try again: \n');

      return;
    }

    console.log(`Bulls: ${bulls}, Cows: ${cows} \n`);

    if (bulls.length !== number.length) {
      playGame(`Guess the ${cows.length} digit numbers? \n`);
    }

    if (bulls.length === number.length) {
      console.log('You guessed all numbers!\n');
      terminal.close();
    }
  });
}

playGame('Guess the 4 digit numbers? \n');
