'use strict';

const { generateNumber } = require('./generateNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { userInterface: ui } = require('./userInterface');
const {
  QUESTION,
  INVALID_INPUT_MESSAGE,
  WINNER_MESSAGE,
  EXPECTED_NUMBER_LENGTH,
} = require('./constants');

const generatedNumber = generateNumber();

function askQuestion() {
  ui.question(QUESTION, (answer) => {
    if (answer.length !== EXPECTED_NUMBER_LENGTH) {
      ui.write(INVALID_INPUT_MESSAGE);
      askQuestion();

      return;
    }

    const { bulls, cows } = calculateBullsAndCows(answer, generatedNumber);

    if (bulls === 4) {
      ui.write(WINNER_MESSAGE);
      ui.close();
    } else {
      const WRONG_GUESS_MESSAGE = `Bulls: ${bulls}, Cows: ${cows}\n`;

      ui.write(WRONG_GUESS_MESSAGE);
      askQuestion();
    }
  });
}

askQuestion();
