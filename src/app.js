'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const randomNumber = generateRandomNumber();

const askUser = () => {
  rl.question('Enter your number', (userInput) => {
    const result = getBullsAndCows(userInput, randomNumber);

    if (result.bulls === 4) {
      rl.close();
    } else {
      rl.write(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);
      askUser();
    }
  });
};

askUser();
