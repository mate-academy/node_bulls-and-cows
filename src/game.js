'use strict';

const { terminal } = require('./terminal.js');
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
      console.log(fourDigitsError);
      game();

      return;
    }

    if (inputNumber === randomNum) {
      console.log(winMessage);
      terminal.close();
    } else {
      const { bulls, cows } = countBullsAndCows(inputNumber);

      if (cows === 0 && bulls === 0) {
        console.log(allDigitsError);
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

      console.log(`${bullMessage}${separator}${cowMessage}`);
      game();
    }
  });
};

module.exports = { game };
