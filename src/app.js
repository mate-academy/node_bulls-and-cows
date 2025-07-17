/* eslint-disable no-console */

'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const random = generateRandomNumber();

const playGame = () => {
  rl.question('Enter a 4-digit number ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Number is not valid');

      return playGame();
    }

    if (+userInput === random) {
      console.log('Congratulations, you win!');

      return rl.close();
    }

    const bullsAndCows = getBullsAndCows(+userInput, random);

    console.log(bullsAndCows);

    return playGame();
  });
};

playGame();
