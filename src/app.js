/* eslint-disable no-console */

'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const BULLS = 4;

const numberToGuess = generateRandomNumber();

console.log(numberToGuess);

const handleUserInput = (userInput) => {
  if (!checkIsValidUserInput(userInput)) {
    console.log('You enter a non-valid number. Try again.\n');

    return askQuestion();
  }

  const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

  if (bulls === BULLS) {
    console.log('You guessed all the numbers.');

    rl.close();
  } else {
    console.log(`You have ${bulls} bulls and ${cows} cows. Try again.\n`);

    askQuestion();
  }
};

const askQuestion = () => {
  rl.question('Enter your number: ', handleUserInput);
};

askQuestion();
