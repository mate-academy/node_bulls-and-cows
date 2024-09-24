/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const rl = readline.createInterface(process.stdin, process.stdout);
const numberToGuess = generateRandomNumber();

const callback = (userInput) => {
  const isValid = checkIsValidUserInput(userInput);

  if (!isValid) {
    console.log('Please, enter the data in the correct format.');

    return;
  }

  if (+userInput === numberToGuess) {
    console.log('Congratulations, you won!');

    rl.close();

    return;
  }

  console.log(getBullsAndCows(+userInput, numberToGuess));
};

rl.question('Try to guess the number: ****\n', callback);
rl.on('line', callback);
