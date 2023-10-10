'use strict';

const { generateNumber } = require('./generateNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { terminal } = require('./userInterface');
const { validateInput } = require('./validateInput');
const {
  QUESTION,
  WINNER_MESSAGE,
  INVALID_INPUT_MESSAGE,
} = require('./constants');

const generatedNumber = generateNumber();

function askQuestion() {
  terminal.question(QUESTION, (userNumber) => {
    const isInputValid = validateInput(userNumber);

    if (!isInputValid) {
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
