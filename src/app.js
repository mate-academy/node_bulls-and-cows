'use strict';

const { numberGenerator } = require('./numberGenerator');
const { terminal } = require('./terminal');
const { calculator } = require('./calculator');
const { output } = require('./output');

const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require('./constants');

const generatedNums = numberGenerator();

const getNumber = (userInput) => {
  if (userInput.length !== 4) {
    terminal.question(
      INPUT_MESSAGE.enterCorrectNumber,
      num => getNumber(num)
    );
  } else if ((/0-9/).test(userInput)) {
    terminal.question(
      INPUT_MESSAGE.enterCorrectNumber,
      num => getNumber(num)
    );
  } else {
    const message = output(calculator(generatedNums, userInput));

    if (message === OUTPUT_MESSAGE.win) {
      // eslint-disable-next-line no-console
      console.log(message);
      terminal.close();
    } else {
      // eslint-disable-next-line no-console
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
