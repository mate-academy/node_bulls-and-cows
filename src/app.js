/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const getRandomNumber = require('./numberGenerator.js');
const getHint = require('./hint.js');
const checkValidInput = require('./guessValidation.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = getRandomNumber();

function playBullsAndCows() {
  terminal.question('Please enter your guess as a 4-digit number: ',
    (guess) => {
      if (!checkValidInput(guess)) {
        // eslint-disable-next-line max-len
        console.log('Please enter a valid 4-digit number without any spaces or special characters.');

        return playBullsAndCows();
      }

      const [bulls, cows] = getHint(secret, guess);

      if (bulls === 4) {
        console.log('You won!');
        terminal.close();
      } else {
        console.log(`bulls: ${bulls}, cows: ${cows}`);
        playBullsAndCows();
      }
    });
}

playBullsAndCows();
