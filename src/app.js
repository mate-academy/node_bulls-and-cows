/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

console.log('The "Bulls & Cows" game');
console.log('Your task is to guess a number from 4 different digits.');

function ask() {
  rl.question('Enter a number: ', (number) => {
    if (!checkIsValidUserInput(number)) {
      console.log('Number is not valid!');

      return ask();
    }

    const { bulls, cows } = getBullsAndCows(+number, numberToGuess);

    console.log('');
    console.log(`bulls: ${bulls}`);
    console.log(`cows: ${cows}`);
    console.log('');

    if (bulls === 4) {
      console.log('You guessed the number! Well done!');
      rl.close();
    } else {
      ask();
    }
  });
}

ask();
