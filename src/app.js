'use strict';

// Write your code here
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const readline = require('readline');
const { stdin, stdout } = require('process');

const rl = readline.createInterface({ input: stdin, output: stdout });
const numberToGuess = generateRandomNumber();

function askGuess() {
  rl.question('Write 4 numbers: ', (userInput) => {
    console.log(userInput);

    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid symbols, type only numbers');

      return askGuess();
    }

    const result = getBullsAndCows(userInput, numberToGuess);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('Win!!!');
      rl.close();
    }

    if (result.bulls !== 4) {
      askGuess();
    }
  });
}

askGuess();
