'use strict';

const { terminal, print } = require('./terminal.js');
const { randomNum } = require('./randomNum.js');
const { messages } = require('./messages.js');
const { countBullsAndCows } = require('./countBullsAndCows.js');

const {
  question,
  fourDigitsError,
  allDigitsError,
  winMessage,
} = messages;

const game = () => {
  terminal.question(question, (inputNumber) => {
    if (isNaN(inputNumber) || new Set(inputNumber).size !== 4) {
      print(fourDigitsError);
      game();

      return;
    }

    if (inputNumber === randomNum) {
      print(winMessage);
      terminal.close();
    } else {
      const { bulls, cows } = countBullsAndCows(inputNumber);

      if (cows === 0 && bulls === 0) {
        print(allDigitsError);
        game();

        return;
      }

      const bullMessage = bulls === 0
        ? ''
        : `${bulls} ${bulls > 1 ? 'bulls' : 'bull'}`;

      const cowMessage = cows === 0
        ? ''
        : `${cows} ${cows > 1 ? 'cows' : 'cow'}`;

      const separator = bulls > 0 && cows > 0
        ? ' and '
        : '';

      print(`${bullMessage}${separator}${cowMessage}`);
      game();
    }
  });
};

module.exports = { game };
