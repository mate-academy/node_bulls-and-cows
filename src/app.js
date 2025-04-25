'use strict';

/* eslint-disable no-console */
const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptConfig = {
  message: 'Enter your guess (4 digits): ',
};

async function game() {
  const number = generateRandomNumber();

  console.log('Game started! Try to guess the 4-digit number.');

  let guessed = false;

  const askQuestion = (question) => {
    return new Promise((resolve) => rl.question(question, resolve));
  };

  while (!guessed) {
    const guess = await askQuestion(promptConfig.message);
    const guessNum = +guess;

    if (!checkIsValidUserInput(guess)) {
      console.log('Invalid input!');
      continue;
    }

    const { bulls, cows } = getBullsAndCows(guess, number);

    console.log(`Bulls: ${bulls} Cows: ${cows}`);

    if (number === guessNum) {
      console.log('Good job :) You guessed the number!');
      guessed = true;
    }
  }

  rl.close();
}

game();
