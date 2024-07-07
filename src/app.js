'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber().toString();
const rl = readline.createInterface(process.stdin, process.stdout);
const message = (msg) => rl.output.write(`${msg}\n`);

function playGame() {
  rl.question('Guess a number: \n', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      message(
        // eslint-disable-next-line max-len
        'Wrong input, enter 4 digits with unique numbers and don`t start with 0\n',
      );
      playGame();
    } else {
      if (numberToGuess === userInput) {
        message('You win!Congratulations!!!');
        rl.close();
      } else {
        const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

        message(`Bulls: ${bulls}, Cows: ${cows}`);
        playGame();
      }
    }
  });
}

playGame();
