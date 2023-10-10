'use strict';

const isNumberValid = require('./isNumberValid');
const getBullsCows = require('./getBullsCows');
const terminal = require('./terminal');

const askForNumber = (message, numberToGues) => {
  terminal.question(message, (playerNumber) => {
    if (!isNumberValid(playerNumber)) {
      askForNumber(
        'Invalid number, try again! (4 unique digits like 1234)\n',
        numberToGues,
      );

      return;
    }

    if (playerNumber !== numberToGues) {
      const { bulls, cows } = getBullsCows(playerNumber, numberToGues);

      // eslint-disable-next-line max-len
      askForNumber(`bulls ${bulls}, cows ${cows}\n-------------------------------\n`, numberToGues);

      return;
    }

    // eslint-disable-next-line no-console
    console.log('You won!');
    terminal.close();
  });
};

module.exports = askForNumber;
