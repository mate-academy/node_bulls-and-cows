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

function askQuestion() {
  return new Promise((resolve) => {
    rl.question('Enter your guess: ', (answer) => {
      resolve(answer);
    });
  });
}

async function play() {
  const numberToGuess = generateRandomNumber();
  let guessed = false;

  console.log('===        Welcome to Bulls and Cows!        ===');
  console.log('=== I have generated a random 4-digit number ===');
  console.log('===             Try to guess it!             ===');

  while (!guessed) {
    const guess = await askQuestion();

    if (!checkIsValidUserInput(guess)) {
      console.log('---            Invalid input            ---');
      console.log('Please enter a 4-digit number');
      console.log('Number should not start with 0 and has no duplicate digits');
      continue;
    }

    const { bulls, cows } = getBullsAndCows(guess, numberToGuess);

    console.log('bulls:', bulls);
    console.log('cows:', cows);

    guessed = bulls === 4;
  }

  rl.close();

  console.log(
    `Congratulations! You've guessed the number ${numberToGuess} correctly!`,
  );
}

play();
