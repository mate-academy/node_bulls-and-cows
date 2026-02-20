'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numberToGuess = generateRandomNumber();

function askUser() {
  rl.question('Type 4-digit number to start the game: ', (userInput) => {
    try {
      checkIsValidUserInput(userInput);
    } catch (err) {
      console.log(err.message);
      return askUser();
    }

    const result = getBullsAndCows(userInput, numberToGuess);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      rl.close();
    } else {
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
      askUser();
    }
  });
}

askUser();