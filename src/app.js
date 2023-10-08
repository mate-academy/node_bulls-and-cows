'use strict';
/* eslint-disable no-console */

const { terminal } = require('./terminal');
const { generateNumber } = require('./generateNumber');
const { countBullsAndCows } = require('./countBullsAndCows');
const {
  WIN_MESSAGE,
  INVALID_INPUT_MESSAGE,
  NUMBER_MESSAGE,
} = require('./constants');

const randomNumber = generateNumber();
let userNumber;

function bullsAndCows() {
  terminal.question(NUMBER_MESSAGE, (userInput) => {
    userNumber = userInput;

    if (userNumber === randomNumber) {
      console.log(WIN_MESSAGE);
      terminal.close();

      return;
    }

    if (typeof +userInput !== 'number' || userInput.length !== 4) {
      console.log(INVALID_INPUT_MESSAGE);
      bullsAndCows();
    } else {
      const [bulls, cows] = countBullsAndCows(randomNumber, userNumber);

      console.log(`Bulls: ${bulls}; Cows: ${cows}.`);
      bullsAndCows();
    }
  });
}

bullsAndCows();
