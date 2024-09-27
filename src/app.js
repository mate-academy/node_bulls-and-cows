'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');
const readline = require('node:readline');

const num = generateRandomNumber();

const terminal = readline.createInterface(process.stdin, process.stdout);

function askInput() {
  terminal.question('Enter the number: ', (number) => {
    if (checkIsValidUserInput(number)) {
      const res = getBullsAndCows(parseInt(number), num);
      // console.log(`Bulls: ${res.bulls}, Cows: ${res.cows}`);
      if (res.bulls === 4) {
        // console.log(`Congratulations! You guessed the number.`);
        terminal.close();
      } else {
        askInput();
      }
    } else {
      // console.log('Wrong input, try again...');
      askInput();
    }
  });
}

askInput();
