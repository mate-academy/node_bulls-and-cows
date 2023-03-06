'use strict';

const readline = require('readline');
const {
  checkCorrectLength,
  isNumbersUnique,
} = require('./checkValidQuery.js');
const { getRandomDigits } = require('./getRandomDigits.js');
const randomDigits = getRandomDigits();
const { bullsCounter } = require('./bullsCounter');
const { cowsCounter } = require('./cowsCounter');
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bullsAndCows = () => {
  userInterface
    .question('Hey, let`s play. Please, enter your numbers here: ', startGame);
};

function startGame(input) {
  if (!checkCorrectLength(input)) {
    userInterface.write('you MUST write 4 digits');
    userInterface.question('Try again', startGame);

    return;
  }

  if (!isNumbersUnique(input)) {
    userInterface.write('every digit should be unique');
    userInterface.question('Try again', startGame);

    return;
  }

  const bulls = bullsCounter(input, randomDigits);
  const cows = cowsCounter(input, randomDigits);

  if (bulls === 4) {
    userInterface.write('You are winner!!!');
    userInterface.close();
  }

  userInterface.write(`You got ${cows} cow(-s) and ${bulls} bull(-s)`);

  userInterface.question('Try again', startGame);
}

bullsAndCows();
