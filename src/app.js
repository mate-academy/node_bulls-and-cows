'use strict';
/* eslint-disable no-console */

const { generateRandomNumber } = require('./generateRandomNumber');
const { isNumberValid } = require('./isNumberValid');
const { countBullsAndCows } = require('./countBullsAndCows');
const { NUMBER_LENGTH } = require('./constants');
const { terminal } = require('./terminal');

let counter = 0;
const numberToGuess = generateRandomNumber();

function play() {
  terminal.question(`Please, enter ${NUMBER_LENGTH} digits.`, (userGuess) => {
    if (!isNumberValid(userGuess)) {
      console.log(`You should enter ${NUMBER_LENGTH} different digits!`);

      play();

      return;
    }

    counter++;

    if (numberToGuess.join('') === userGuess) {
      console.log(`You won! You guessed the number
        ${numberToGuess.join('')} from ${counter} tries!`);
      terminal.close();

      return;
    }

    const { bulls, cows } = countBullsAndCows(userGuess, numberToGuess);

    console.log(`${bulls} bulls and ${cows} cows. Try again.`);
    play();
  });
}

play();
