'use strict';

const readline = require('node:readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows').default;
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const output = (text) => {
  rl.output.write(`${text}\n`);
};
const randomNumber = generateRandomNumber().toString();

const play = () => {
  rl.question('Guess a number: ', (number) => {
    if (!checkIsValidUserInput(number)) {
      output('Wrong input, enter 4 digitnumber with unique numbers');
      play();
    } else {
      const { bulls, cows } = getBullsAndCows(number, randomNumber);

      output(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        output('You won!');
        rl.close();
      } else {
        output('Try again');
        play();
      }
    }
  });
};

play();
