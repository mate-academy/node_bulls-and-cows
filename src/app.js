/* eslint-disable no-console */
'use strict';

const { generateNumber } = require('./generateNumber');
const { compareNumbers } = require('./compareNumbers');
const rl = require('readline');

const randomNum = generateNumber();

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const playGame = () => {
  terminal.question('Try to guess the 4-digit number. ', (answer) => {
    if (answer.length !== 4 || !Number(answer)) {
      console.log('Please enter a valid 4-digit number.');
      playGame();

      return;
    }

    const result = compareNumbers(randomNum, answer);

    if (result.bulls === 4) {
      console.log(`Congratulations! You guessed the correct number: ${answer}`);
      terminal.close();
    } else {
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
      playGame();
    }
  });
};

console.log('Welcome to Bulls and Cows game!');

playGame();
