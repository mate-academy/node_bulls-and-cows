/* eslint-disable no-console */
'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('readline');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function bullsAndCowsGame() {
  terminal.question('Enter a 4-digit number: ', (userInput) => {
    const randomNumber = generateRandomNumber();

    if (checkIsValidUserInput(userInput)) {
      const bullsAndCows = getBullsAndCows(userInput, randomNumber);

      const { bulls } = bullsAndCows;

      if (bulls === 4) {
        console.log(bullsAndCows);
        console.log('You won!');
        terminal.close();
      } else {
        console.log(bullsAndCows);

        console.log(
          `Number is incorrect, correct number is ${randomNumber}`,
        );
        bullsAndCowsGame();
      }
    } else {
      console.log('Enter correct number');
      bullsAndCowsGame();
    }
  });
}

bullsAndCowsGame();
