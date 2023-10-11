/* eslint-disable no-console */
'use strict';

const { numberGenerator } = require('./numberGenerator');
const { terminal } = require('./terminal');
const { calculator } = require('./calculator');
const { output } = require('./output');

const {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  REGEXP,
  NUMBER_LENGTH,
} = require('./constants');

const generatedNums = numberGenerator();

const getNumber = (userInput) => {
  if (userInput.length !== NUMBER_LENGTH) {
    terminal.question(
      INPUT_MESSAGE.enterCorrectNumber,
      num => getNumber(num)
    );
  } else if ((REGEXP).test(userInput)) {
    terminal.question(
      INPUT_MESSAGE.enterCorrectNumber,
      num => getNumber(num)
    );
  } else {
    const message = output(calculator(generatedNums, userInput));

    if (message === OUTPUT_MESSAGE.win) {
      console.log(message);
      terminal.close();
    } else {
      console.log(message);
      startGame();
    }
  }
};

const startGame = () => {
  terminal.question(
    INPUT_MESSAGE.enterNumber,
    number => getNumber(number)
  );
};

startGame();
