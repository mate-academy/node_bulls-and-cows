'use strict';

// Write your code here

const readLine = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readLine.createInterface(process.stdin, process.stdout);
const digitToGuess = generateRandomNumber();

terminal.write('Welcome to Bulls and Cows!');
terminal.write('Try to guess the 4-digit number with unique digits.');

function askForGuess() {
  terminal.question('Enter 4 digit Number: ', (guess) => {
    if (!checkIsValidUserInput(guess)) {
      terminal.write(
        'Invalid Input, Enter a 4-digit number with unique digits.',
      );
      askForGuess();

      return;
    }

    const answer = getBullsAndCows(+guess, digitToGuess);

    if (answer.bulls === 4) {
      terminal.write('Congratulations ! Your guess is right');
      terminal.close();
    } else {
      terminal.write(
        `Result is Bulls: ${answer.bulls} and Cows: ${answer.cows}`,
      );
      askForGuess();
    }
  });
}

askForGuess();
