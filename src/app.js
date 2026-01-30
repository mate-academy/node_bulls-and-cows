'use strict';

// Write your code here
// import readline from 'readline';
// import { checkIsValidUserInput } from './modules/checkIsValidUserInput';
// import { getBullsAndCows } from './modules/getBullsAndCows';
// import { generateRandomNumber } from './modules/generateRandomNumber';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const randomNumber = generateRandomNumber();

const askUserNumber = () => {
  terminal.question('Please enter your number: ', (userNumber) => {
    if (!checkIsValidUserInput(userNumber)) {
      // eslint-disable-next-line no-console
      console.log('Invalid input. Please enter 4 different digits.');

      askUserNumber();

      return;
    }

    const { bulls, cows } = getBullsAndCows(userNumber, randomNumber);

    // eslint-disable-next-line no-console
    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls !== 4) {
      askUserNumber();

      return;
    }

    // eslint-disable-next-line no-console
    console.log('Congratulations! You guessed the number.');

    terminal.close();
  });
};

askUserNumber();
