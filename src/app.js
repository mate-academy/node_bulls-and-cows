/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { validateGuess } = require('./guessValidation');
const { getHint } = require('./bullsCounter');
const { getRandomNumber } = require('./randomNumGenerator');

const secretNumber = getRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.setPrompt('Guess a four-digit number with unique digits ');
terminal.prompt();

terminal.on('line', (guessNumber) => {
  validateGuess(guessNumber);

  if (guessNumber.localeCompare(secretNumber) !== 0) {
    console.log(getHint(secretNumber, guessNumber));
    terminal.prompt();
  } else {
    console.log('You nailed it!');
    terminal.close();
  }
});
