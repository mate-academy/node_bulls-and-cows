'use strict';

const { generateRandomNumber } = require('./generateRandomNumber.js');
const { calculator } = require('./calculateBullsCows');
const { terminal } = require('./buildDialogue');

const randomNumber = String(generateRandomNumber(1000, 9999));

// eslint-disable-next-line no-console
console.log(
  'You must write 4 unique digits\n'
  + 'Are you ready?! Let\'s go!'
);

const mainGame = () => {
  terminal.question(
    'Write a number -> ',
    (answer) => {
      const { bulls, cows } = calculator(randomNumber, answer);
      const isValidNum = [...new Set(answer)].length === 4
        && isFinite(Number(answer));

      if (!isValidNum) {
        // eslint-disable-next-line no-console
        console.log('Not valid number, try again');
        mainGame();

        return;
      }

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('You won!');
        terminal.close();
      } else {
        // eslint-disable-next-line no-console
        console.log(`Bulls: ${bulls}, cows: ${cows}`);
        mainGame();
      }
    });
};

mainGame();
