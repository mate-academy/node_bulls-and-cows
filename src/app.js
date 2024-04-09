/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function askQuestion() {
  terminal.question('Enter a 4-digit number: ', (userInput) => {
    if (checkIsValidUserInput(userInput)) {
      const { bulls, cows } = getBullsAndCows(+userInput, randomNumber);

      if (bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        terminal.close();
      } else {
        console.log(`Bulls: ${bulls}, Cows: ${cows}`);
        askQuestion();
      }
    } else {
      askQuestion();
    }
  });
}

askQuestion();
