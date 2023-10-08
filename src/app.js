'use strict';
/* eslint-disable no-console */

const { terminal } = require('./terminal');
const { generateNumber } = require('./generateNumber');
const { countBullsAndCows } = require('./countBullsAndCows');

const randomNumber = generateNumber();
let userNumber;

function bullsAndCows() {
  terminal.question('Your number: ', (userInput) => {
    userNumber = userInput;

    if (userNumber === randomNumber) {
      console.log('Congratulations! You won!');
      terminal.close();

      return;
    }

    if (typeof +userInput !== 'number' || userInput.length !== 4) {
      console.log('Invalid input. Please, try again. ');
      bullsAndCows();
    } else {
      const [bulls, cows] = countBullsAndCows(randomNumber, userNumber);

      console.log(`Bulls: ${bulls}; Cows: ${cows}.`);
      bullsAndCows();
    }
  });
}

bullsAndCows();
