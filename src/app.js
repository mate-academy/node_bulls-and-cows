/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

/**
 * @param {string} numberToGuess
 */
function play(numberToGuess) {
  rl.question('Try to guess the number: ', (userInput) => {
    if (numberToGuess === +userInput) {
      console.log('The number was found!');
      rl.close();

      return;
    }

    if (!checkIsValidUserInput(userInput)) {
      console.log('Please, write the correct number.\n');
      play(numberToGuess);

      return;
    }

    const { cows, bulls } = getBullsAndCows(+userInput, numberToGuess);

    console.log(
      `You have: ${bulls} bull${bulls !== 1 ? 's' : ''} ${cows} cow${cows !== 1 ? 's' : ''}\n`,
    );
    play(numberToGuess);
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

play(randomNumber);
