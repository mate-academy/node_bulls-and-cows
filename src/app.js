/* eslint-disable no-console */
'use strict';

const { terminal } = require('./modules/terminal');
const { generateNumber } = require('./modules/generateNumber');
const { calculateBullsAndCows } = require('./modules/calculateBullsAndCows');

const randomNumber = generateNumber();

function playGame() {
  terminal.question('Guess a number ', (guess) => {
    if (guess.length !== 4) {
      console.log('Please enter a 4-digit number');

      playGame();

      return;
    }

    if (guess.match(/[a-zA-Z]/g)) {
      console.log('Please enter a correct number');
      playGame();

      return;
    }

    const setLength = [...new Set(guess)].length;

    if (setLength !== 4) {
      console.log('Please enter a number with all different digits');

      playGame();

      return;
    }

    if (randomNumber === guess) {
      console.log('Victory!');

      terminal.close();

      return;
    }

    const [bulls, cows] = calculateBullsAndCows(randomNumber, guess);

    console.log(`You have ${bulls} bulls and ${cows} cows`);

    playGame();
  });
}

playGame();
