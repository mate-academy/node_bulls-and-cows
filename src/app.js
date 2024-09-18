/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function promptUser() {
  rl.question('What is your guess?\n', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Your input is incorrect!');
      promptUser();
    } else {
      if (numberToGuess === +userInput) {
        console.log('Congrats! You win!');
        rl.close();
      } else {
        const bullsCowsObject = getBullsAndCows(+userInput, numberToGuess);

        console.log(
          `Bulls: ${bullsCowsObject.bulls}, Cows: ${bullsCowsObject.cows}`,
        );
        promptUser();
      }
    }
  });
}

promptUser();
