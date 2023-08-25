/* eslint-disable no-console */
'use strict';

const { getBullsAndCows } = require('./bullsAndCows');
const { generateNumber } = require('./generateNumber');
const { terminal } = require('./terminal');
const { isNumberValid } = require('./validateNumber');

const generatedNumber = String(generateNumber());

const startGame = () => {
  terminal.question('Try to quess the number:\n', (enteredNumber) => {
    if (!isNumberValid(enteredNumber)) {
      console.log('Invalid number\n');
      startGame();
    } else {
      const bullsAndCows = getBullsAndCows(generatedNumber, enteredNumber);
      const bulls = bullsAndCows[0];
      const cows = bullsAndCows[1];

      console.log(`Bulls: ${bulls}, Cows: ${cows}\n`);

      if (bulls === 4) {
        console.log('Congratulations, you win!');
        terminal.close();
      } else {
        startGame();
      }
    }
  });
};

startGame();
