'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const targetNumber = generateRandomNumber();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game() {
  rl.question('Please input a 4-digits number: ', (userInput) => {
    const validation = checkIsValidUserInput(userInput);

    if (!validation) {
      console.log(`Error: incorrect number`);

      return game();
    }

    const result = getBullsAndCows(userInput, targetNumber);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log(`You win! You gessed the number: ${targetNumber}`);
      rl.close();
    } else {
      game();
    }
  });
}

console.log('Let`s play Bulls and Cows!');

game();
