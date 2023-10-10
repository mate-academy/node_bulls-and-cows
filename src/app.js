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
const { isInputValid } = require('./isInputValid');

const randomNumber = generateNumber();

function playBullsAndCows() {
  terminal.question(NUMBER_MESSAGE, (userInput) => {
    if (userInput === randomNumber) {
      console.log(WIN_MESSAGE);
      terminal.close();

      return;
    }

    if (!isInputValid(userInput)) {
      console.log(INVALID_INPUT_MESSAGE);
      playBullsAndCows();

      return;
    }

    const { bulls, cows } = countBullsAndCows(randomNumber, userInput);

    console.log(`Bulls: ${bulls}; Cows: ${cows}.`);
    playBullsAndCows();
  });
}

playBullsAndCows();
