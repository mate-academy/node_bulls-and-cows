'use strict';

const { terminal } = require('./userOperations');
const { generateNumber } = require('./generateNumber');
const { getBullsAndCows } = require('./getBullsAndCows');

const generatedNumber = generateNumber();

const askUser = () => {
  terminal.question('Guess the number: ', (userString) => {
    const result = getBullsAndCows(generatedNumber, userString);

    if (result === 'Congratulations! You`ve guessed the number') {
      // eslint-disable-next-line no-console
      console.log(result);
      terminal.close();
    } else {
      askUser();
    }
  });
};

askUser();
