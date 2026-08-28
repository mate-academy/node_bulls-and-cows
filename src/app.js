'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();
const normalizedNumber = secretNumber.toString();

const askGuess = () => {
  rl.question('Enter 4-digit number: ', (userInput) => {
    if (typeof userInput !== 'string') {
      return;
    }

    if (checkIsValidUserInput(userInput)) {
      if (userInput === normalizedNumber) {
        console.log('You win!');
        rl.close();

        return;
      }

      const result = getBullsAndCows(normalizedNumber, userInput);
      const { bulls, cows } = result;

      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    } else {
      console.log('Invalid number');
    }
    askGuess();
  });
};

askGuess();
