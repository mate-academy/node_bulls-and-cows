/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const randomNum = generateRandomNumber();

console.log('Random number:', randomNum);
askQuestion(randomNum);

function askQuestion(randomNumber) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const promptUser = () => {
    rl.question('Guess the number:\n', (userNumber) => {
      if (checkIsValidUserInput(userNumber)) {
        const userTry = getBullsAndCows(userNumber, randomNumber);

        console.log(userTry);

        if (userTry.bulls === 4) {
          console.log('You win!');
          rl.close();
        } else {
          console.log('Try again');
          promptUser();
        }
      } else {
        console.log('Number should include 4 unique digits from 1 to 9');
        promptUser();
      }
    });
  };

  promptUser();
}
