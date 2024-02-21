/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

console.log('Number to guess:', numberToGuess);

const terminal = readline.createInterface(process.stdin, process.stdout);

terminal.setPrompt('Enter 4-digit number > ');
terminal.prompt();

terminal.on('line', userInput => {
  if (!checkIsValidUserInput(userInput)) {
    terminal.prompt();

    return;
  }

  const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

  if (bulls !== 4) {
    console.log(`bulls: ${bulls}, cows: ${cows}`);
    terminal.prompt();

    return;
  }

  console.log('Congratulate, you guessed the number!');
  terminal.close();
});
