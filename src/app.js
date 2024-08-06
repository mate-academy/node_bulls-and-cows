/* eslint-disable no-console */
('use strict');

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const randomNumber = generateRandomNumber().toString();

console.log('[   Bulls & Cows   ]\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('Enter your guess > ');
rl.prompt();

rl.on('line', function (line) {
  const input = line.trim();

  if (!checkIsValidUserInput(input)) {
    console.log('Incorrect value.');
  } else if (randomNumber === input) {
    console.log(`You won! ${input} is the correct number`);

    process.exit(0);
  } else {
    const bullsAndCows = getBullsAndCows(input, randomNumber);

    console.log(`Bulls: ${bullsAndCows.bulls}`);
    console.log(`Cows: ${bullsAndCows.cows}`);
  }

  rl.prompt();
});
