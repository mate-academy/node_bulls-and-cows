'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(process.stdin, process.stdout);
const numberToGuess = generateRandomNumber();

function play() {
  terminal.question('Please enter your quess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      terminal.write(
        '!! Please enter a 4-digit number with unique digits(not start 0).\n',
      );
      play();
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    if (bulls.length === 4) {
      terminal.write(
        `Congratulations! You guessed the number ${numberToGuess} correctly!\n`,
      );
      terminal.close();
    } else {
      terminal.write(`Try again! You guessed ${bulls} bulls, ${cows} cows\n`);
      play();
    }
  });
}

play();
