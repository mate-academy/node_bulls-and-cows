'use strict';

const { compareInputNumber } = require('./compareInputNumber');
const { generatorRandomNumber } = require('./generator');
const { terminal } = require('./terminal');

function checkDifferentDigits(numbers) {
  const setNumbers = new Set(numbers);

  return setNumbers.size === 4;
}

const randomNumber = generatorRandomNumber();

const playGuessNumber = () => {
  terminal.question('try to guess a number ', (number) => {
    if (String(number).length !== 4) {
      global.console.log(
        `Your number ${number}, but you must to write 4 digits`
      );

      return playGuessNumber();
    }

    if (!checkDifferentDigits(number)) {
      global.console.log(
        `Your number ${number}, but you must to write 4 different digits`
      );

      return playGuessNumber();
    }

    if (number === randomNumber) {
      global.console.log(`You WIN, random number was ${randomNumber}`);
      terminal.close();
    } else {
      compareInputNumber(number, randomNumber);
      playGuessNumber();
    }
  });
};

playGuessNumber();
