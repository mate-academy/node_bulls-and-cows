'use strict';

/* eslint-disable no-console */

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  const secretNumber = generateRandomNumber();

  console.log('Welcome to Bulls and Cows game!');
  console.log('I have generated a 4-digit number with unique digits.');
  console.log('Try to guess it!\n');

  const askQuestion = () => {
    rl.question('Enter your guess: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        console.log(
          'Invalid input! Please enter a 4-digit number ' +
            'that does not start with 0 and has no duplicate digits.\n',
        );
        askQuestion();

        return;
      }

      const userNumber = parseInt(userInput, 10);
      const result = getBullsAndCows(userNumber, secretNumber);

      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);

      if (result.bulls === 4) {
        console.log(`Congratulations! You guessed the number ${secretNumber}!`);
        rl.close();
      } else {
        askQuestion();
      }
    });
  };

  askQuestion();
}

playGame();
