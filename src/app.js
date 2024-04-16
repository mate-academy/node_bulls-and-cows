'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const truesNumber = generateRandomNumber();

const game = () => {
  terminal.question('Please enter a four-digit number: ', (userNumber) => {
    if (checkIsValidUserInput(userNumber)) {
      const { bulls, cows } = getBullsAndCows(userNumber, truesNumber);

      if (bulls !== 4) {
        // eslint-disable-next-line no-console
        console.log(`Bulls: ${bulls}, Cows: ${cows}`);

        game();
      } else {
        // eslint-disable-next-line no-console
        console.log('Congratulations!!!');

        terminal.close();
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('Incorrect number');

      game();
    }
  });
};

game();
