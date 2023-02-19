/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { generateRandomFourDigitNumber } = require('./random-geerator');
const { countBullAndCows } = require('./buls-and-cows-counter');

const generatedNumb = generateRandomFourDigitNumber();

function game() {
  terminal.question('Try to guess the 4 digits number... ', (questNumber) => {
    if (questNumber.length !== 4) {
      console.log('Please enter the number with the required number of digits');
      game();
    } else {
      const result = countBullAndCows(questNumber, generatedNumb);

      console.log(`Your result: Bulls:${result.bulls}, Cows:${result.cows}`);

      if (result.bulls === 4) {
        console.log('Congratulations!!!)');
        terminal.close();
      } else {
        console.log(`Try again \n`);
        game();
      }
    }
  });
}

game();
