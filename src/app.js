/* eslint no-console: [,{ allow: ["warn", "log", "error"] }] */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Guess a 4 digit number!');

rl.on('line', (userInput) => {
  if (!checkIsValidUserInput(userInput)) {
    console.log('Invalid input. Try again:');

    return;
  }

  const result = getBullsAndCows(Number(userInput), numberToGuess);

  console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

  // assuming getBullsAndCows returns { bulls, cows }
  if (result.bulls === 4) {
    console.log('🎉 You won!');
    rl.close();
  } else {
    console.log('Try again:');
  }
});
