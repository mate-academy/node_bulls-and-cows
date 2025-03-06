'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();
// eslint-disable-next-line max-len, prettier/prettier
let phrase = "Let's start our game! You need to enter a 4-digit number, each digit is unique ";

function game() {
  terminal.question(phrase, (num) => {
    if (checkIsValidUserInput(num)) {
      // eslint-disable-next-line no-console
      console.log(getBullsAndCows(+num, randomNumber));
      // eslint-disable-next-line max-len, prettier/prettier
      phrase = "You haven't guessed the number yet. Keep going and you'll succeed.";
    } else {
      phrase = 'You entered an invalid number.';
    }

    if (randomNumber === +num) {
      phrase = `Congratulations, you guessed the number ${randomNumber}.`;

      return terminal.close();
    }
    game();
  });
}
game();
