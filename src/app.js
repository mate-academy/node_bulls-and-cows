/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
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

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function playGame() {
  const numberToGuess = generateRandomNumber();

  console.log('Welcome to Bulls and Cows!');
  console.log('I have generated a random 4-digit number. Try to guess it!');

  let  bulls = 0;
  let  cows = 0;

  while (bulls !== 4) {
    const userInput = await askQuestion('Enter your guess (4-digit number): ');

    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input. Please enter a 4-digit number that does not start with 0 and has no duplicate digits.');
      continue;
    }

    ({ bulls, cows } = getBullsAndCows(userInput, numberToGuess));

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);
  }

  rl.close();

  console.log(`Congratulations! You've guessed the number ${numberToGuess} correctly!`);

}

playGame();
