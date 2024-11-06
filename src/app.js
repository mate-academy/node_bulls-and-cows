/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = () => {
  const secretNumber = generateRandomNumber();

  const playRound = () => {
    rl.question('Input 4 different digits: ', (input) => {
      const isValid = checkIsValidUserInput(input);
      const inputNumber = +input;

      if (inputNumber === secretNumber) {
        console.log('Congratulations you win');

        return rl.close();
      }

      if (isValid) {
        const { bulls, cows } = getBullsAndCows(inputNumber, secretNumber);

        console.log(
          `The result is ${bulls} bull${bulls > 1 ? 's' : ''} and ${cows} cow${cows > 1 ? 's' : ''}`,
        );

        return playRound();
      } else {
        console.log('Value is invalid');

        return playRound();
      }
    });
  };

  playRound();
};

game();
