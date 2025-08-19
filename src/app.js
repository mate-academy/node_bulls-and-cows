'use strict';

/* eslint-disable no-console */
const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const randomNumber = generateRandomNumber();
const terminal = readline.createInterface(process.stdin, process.stdout);
let winGame = false;

function askQuestion(query) {
  return new Promise((resolve) => {
    terminal.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function playGame() {
  console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

  while (!winGame) {
    const input = await askQuestion(
      'Please write a number of 4 different digits: ',
    );

    if (!checkIsValidUserInput(input)) {
      console.log('❌ Invalid input. Try again.');
      continue;
    }

    const { bulls, cows } = getBullsAndCows(+input, randomNumber);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('🎉 You win!');
      winGame = true;
    }
  }

  terminal.close();
}
playGame();
