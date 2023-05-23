'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { generateNumber } = require('./generateNumber');

const randomNumber = generateNumber();
const question = 'Enter a number with 4 digits to guess: ';

console.log(randomNumber);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidAnswer = (answer) => {
  return new Set(answer).size === 4 && !isNaN(answer);
};

const handleUserInput = (answer) => {
  if (!isValidAnswer(answer)) {
    console.log('Please enter valid input');
    launchGame();

    return;
  }

  const {
    status,
    statusString,
  } = calculateBullsAndCows(randomNumber, answer);

  if (status) {
    console.log(`Congratulations, you win!`);
    rl.close();

    return;
  }

  console.log(statusString);
  launchGame();
};

const launchGame = () => {
  rl.question(question, handleUserInput);
};

launchGame();
