/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const randomNumber = generateRandomNumber();
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function play(message) {
  terminal.question(message, (userInput) => {
    if (checkIsValidUserInput(userInput)) {
      const { bulls, cows } = getBullsAndCows(userInput, randomNumber);

      if (bulls !== 4) {
        play(`BULLS: ${bulls};\nCOWS: ${cows}.\nKeep it up! and try again:\n`);
      } else {
        console.log('Congratulations! You are the winner!!!');

        terminal.close();
      }
    } else {
      play('Please, try again!\n');
    }
  });
}

play('Please, enter a 4-digit number:\n');
