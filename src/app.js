'use strict';

const { terminal, print } = require('./terminal');
const { generateRandomNumber } = require('./generator');
const { compareNumbers } = require('./compareNumbers');

const randomNumber = generateRandomNumber();

const playGame = () => {
  terminal.question('Guess a number: ', (input) => {
    const formattedInput = input.replace(/\s/g, '');
    const isValidNumber = new Set(formattedInput).size === 4
      && !isNaN(formattedInput);

    if (!isValidNumber) {
      print('Enter a number consisting of 4 different digits');

      playGame();

      return;
    }

    const { bulls, cows } = compareNumbers(formattedInput, randomNumber);

    if (bulls < 4) {
      print(`You have ${bulls} bulls and ${cows} cows. Try again!`);

      playGame();
    }

    if (bulls === 4) {
      print('You won!');

      terminal.close();
    }
  });
};

playGame();
