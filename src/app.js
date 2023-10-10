'use strict';

const { generateNumber } = require('./generateNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { terminal } = require('./userInterface');
const {
  QUESTION,
  INVALID_INPUT_MESSAGE,
  WINNER_MESSAGE,
  EXPECTED_NUMBER_LENGTH,
} = require('./constants');

const generatedNumber = generateNumber();

function askQuestion() {
  terminal.question(QUESTION, (userNumber) => {
    if (userNumber.length !== EXPECTED_NUMBER_LENGTH) {
      terminal.write(INVALID_INPUT_MESSAGE);
      askQuestion();

      return;
    }

    if (+userNumber === generatedNumber) {
      terminal.write(WINNER_MESSAGE);
      terminal.close();

      return;
    }

    const { bulls, cows } = calculateBullsAndCows(userNumber, generatedNumber);
    const WRONG_GUESS_MESSAGE = `Bulls: ${bulls}, Cows: ${cows}\n`;

    terminal.write(WRONG_GUESS_MESSAGE);
    askQuestion();
  });
}

askQuestion();
