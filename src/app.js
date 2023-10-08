'use strict';
/* eslint-disable no-console */

const { numberToGuess } = require('./generateRandomNumber');
const { isNumberValid } = require('./isNumberValid');
const { countBullsAndCows } = require('./countBullsAndCows');
const { terminal } = require('./terminal');

let counter = 0;

function play() {
  terminal.question('Please, enter 4 digits.', (userGuess) => {
    if (!isNumberValid(userGuess)) {
      console.log('You should enter 4 different digits!');

      play();

      return;
    }

    counter++;

    const { bulls, cows } = countBullsAndCows(userGuess, numberToGuess);

    if (bulls === 4) {
      console.log(`You won! You guessed the number
        ${numberToGuess.join('')} from ${counter} tries!`);
      terminal.close();

      return;
    }

    console.log(`${bulls} bulls and ${cows} cows. Try again.`);
    play();
  });
}

play();
