'use strict';

const { terminal } = require('./terminal');
const { getBullsAndCowsCount } = require('./calculation');
const { getRandomFourDigitNumber } = require('./randomNumber');

const randomNumber = getRandomFourDigitNumber();

function guessNumber() {
  terminal.question(`Please guess the number (four digits): `, (userNumber) => {
    /* eslint-disable no-console */

    if (userNumber.toString().length < 4) {
      console.log('Wrong number of digits');
      guessNumber();

      return;
    }

    if (isNaN(userNumber)) {
      console.log('Invalid data type');
      guessNumber();

      return;
    }

    const { bulls, cows } = getBullsAndCowsCount(randomNumber, userNumber);

    if (randomNumber.toString() === userNumber) {
      console.log('Congratulations! You guessed the number!');
      terminal.close();

      return;
    }

    console.log(`Bulls: ${bulls}, cows: ${cows}. Try again.`);
    guessNumber();
  });
};

guessNumber();
