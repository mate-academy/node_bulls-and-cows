/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

// Write your code here

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

function askQuestion() {
  rl.question('Enter a 4-digit number: ', (userInput) => {
    if (checkIsValidUserInput(userInput)) {
      const result = getBullsAndCows(userInput, randomNumber);

      if (result.bulls === 4 && result.cows === 0) {
        console.log('Congratulations! You guessed the number!');
        rl.close();
      } else {
        console.log(`You have ${result.bulls} bulls and ${result.cows} cows.`);
        console.log(`Try again!`);
        askQuestion();
      }
    } else {
      console.log(
        'Please enter a valid 4-digit number that does not start with 0 and does not contain any duplicate digits.',
      );
      askQuestion();
    }
  });
}

rl.on('close', () => {
  console.log('Thanks for playing!');
});

askQuestion();
