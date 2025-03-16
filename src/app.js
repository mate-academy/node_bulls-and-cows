'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('node:readline');

// Write your code here

const quessNumbers = generateRandomNumber();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleResponse = (response) => {
  if (!checkIsValidUserInput(response)) {
    rl.write(
      'Your numbers are invalid. Please enter a valid 4-digit number.\n',
    );
    rl.question('Enter your numbers: ', (numbers) => handleResponse(numbers));
  } else {
    const result = getBullsAndCows(response, quessNumbers);

    if (result.bulls === 4 && result.cows === 0) {
      rl.write(`You win! The correct number was ${quessNumbers}.\n`);
      rl.close();
    } else {
      rl.write(`bulls: ${result.bulls}; cows: ${result.cows}\n`);
      rl.question('Enter your numbers: ', (numbers) => handleResponse(numbers));
    }
  }
};

rl.question('Enter your numbers: ', (numbers) => handleResponse(numbers));
