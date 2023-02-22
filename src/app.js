/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateNumber } = require('./generateNumber');
const { calculateBullsCows } = require('./calculateBullsCows');
const { isValid } = require('./isValid');

const randomNumber = generateNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const playGame = () => {
  let guesses = 0;

  terminal.setPrompt('Please enter a number of 4 different digits  ');
  terminal.prompt();

  terminal.on('line', (answer) => {
    if (!isValid(answer)) {
      console.log('Invalid input, try again.');
      terminal.prompt();

      return;
    }
    guesses++;

    const { bulls, cows } = calculateBullsCows(randomNumber, answer);

    console.log(`${bulls} bulls, ${cows} cows`);

    if (bulls === 4) {
      console.log(`Congratulations, you won! It took you ${guesses} guesses.`);
      terminal.close();

      return;
    }

    terminal.prompt();
  });
};

playGame();
