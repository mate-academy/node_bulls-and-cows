'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { checkDigits } = require('./checkDigits');

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validateGuess = (guess, neededNumber) => {
  const isValidValue = guess.split('').every(char => !isNaN(char));

  if (!isValidValue) {
    console.log('Invalid input value!');

    return false;
  }

  if (guess.length !== neededNumber.length) {
    console.log('Invalid input length!');

    return false;
  }

  return true;
};

const startGame = (neededNumber) => {
  inputInterface.question('Guess a number of 4 digits: ', (answer) => {
    const { bulls, cows } = checkDigits(neededNumber, answer);

    if (!validateGuess(answer, neededNumber)) {
      return startGame(neededNumber);
    }

    if (bulls === neededNumber.length) {
      console.log('You win!');

      inputInterface.close();

      return;
    }

    console.log(
      '\nWrong answer!',
      '\n\nBulls : ' + bulls + '\nCows: ' + cows + '\n',
      neededNumber
    );

    startGame(neededNumber);
  });
};

module.exports.startGame = startGame;
