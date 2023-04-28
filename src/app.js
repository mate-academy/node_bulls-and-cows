/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { compareNumbers } = require('./compareNumbers');
const { randomNumber } = require('./generateNumber');
const { isValidInput } = require('./validInput');

const number = randomNumber();

console.log('This is game Bull ana Cows! You need guess a number');

const startGame = () => {
  terminal.question('> ', (input) => {
    if (!isValidInput(input)) {
      console.log('Wrong number! Please enter 4 different digits.');
      startGame();
    } else {
      const guess = input.split('').map(Number);
      const [bulls, cows] = compareNumbers(guess, number);

      if (bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        terminal.close();
      } else {
        console.log(`${bulls} bulls, ${cows} cows`);
        console.log('Try again');
        startGame();
      }
    }
  });
};

startGame();
