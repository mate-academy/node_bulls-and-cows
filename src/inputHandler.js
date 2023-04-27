'use strict';

const { terminal } = require('./terminal');
const { getFourDigitNumber } = require('./numberGenerator');
const { getBullsAndCows } = require('./bullsCowsCounter');
const { isValidInput } = require('./inputValidator');

const targetNum = getFourDigitNumber();

const handleInput = (userNum) => {
  const isOk = isValidInput(userNum);

  if (Number(userNum) === targetNum) {
    global.console.log('You guessed the number!');
    terminal.close();

    return;
  }

  if (isOk) {
    global.console.log(getBullsAndCows(targetNum, userNum));
  } else {
    global.console.log('Your number should include 4 different digits!');
  }

  terminal.question('Guess the number: ', handleInput);
};

module.exports.handleInput = handleInput;
