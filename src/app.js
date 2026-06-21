'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

function play() {
  rl.question(
    'Enter your option (4 unique digits not starting with zero): ',
    (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        process.stdout.write('Invalid input! \n\n');
        play();

        return;
      }

      const bullsAndCows = getBullsAndCows(Number(userInput), secretNumber);

      if (bullsAndCows.bulls === 4) {
        process.stdout.write(
          'Congratulations, you guessed the number.' +
            ' \x1b[1m\x1b[32mYou win!\x1b[0m \n\n',
        );
        rl.close();

        return;
      }

      process.stdout.write(
        `Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows} \n\n`,
      );
      play();
    },
  );
}

play();
