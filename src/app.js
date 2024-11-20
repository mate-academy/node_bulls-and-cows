/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber().toString();

function newGame() {
  game.question(`Enter your number  `, (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Enter correct number');
      newGame();
    } else if (userInput === numberToGuess) {
      console.log('YOU WIN!!!');
      game.close();
    } else {
      console.log(getBullsAndCows(userInput, numberToGuess));
      newGame();
    }
  });
}

newGame();

module.exports = {
  newGame,
};
