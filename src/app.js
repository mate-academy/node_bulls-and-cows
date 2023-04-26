/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generateNumber } = require('./generator');
const { compareNumbers } = require('./compareNumber');

const generatedNumber = generateNumber();

const playBullsAndCows = () => {
  terminal.question('Guess the number ', (userNumber) => {
    const isUserNumberValid = new Set(userNumber).size === 4
    && !isNaN(userNumber);

    if (!isUserNumberValid) {
      console.log('Insert a number of 4 different digits');

      playBullsAndCows();

      return;
    }

    const { bull, cow } = compareNumbers(userNumber, generatedNumber);

    if (bull === 4) {
      console.log('U won, congratulations!');

      terminal.close();
    }

    console.log(
      `Try again, u have ${bull} bulls and ${cow} cows`
    );

    playBullsAndCows();
  });
};

playBullsAndCows();
