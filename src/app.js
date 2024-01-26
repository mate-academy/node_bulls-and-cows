'use strict';

const readline = require('readline');
const { checkIsValidUserInput }
  = require('./modules/checkIsValidUserInput.js');
const { generateRandomNumber }
  = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const randomNumber = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playBullsAndCows() {
  terminal.question('Guess number with 4 different digits: ', (userAnswer) => {
    if (checkIsValidUserInput(userAnswer)) {
      const result = getBullsAndCows(userAnswer, randomNumber);

      terminal.write(`Bulls: ${result.bulls}, cows: ${result.cows} \n`);

      if (result.bulls === 4) {
        terminal.write('You won!');
        terminal.close();
      } else {
        playBullsAndCows();
      }
    } else {
      terminal.write('Please enter valid 4 digit number! \n');
      playBullsAndCows();
    }
  });
}

playBullsAndCows();
