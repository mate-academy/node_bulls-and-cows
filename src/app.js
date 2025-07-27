'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const { generateRandomNumber } = require('./modules/generateRandomNumber');

const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randNumber = generateRandomNumber();

function askForGuess() {
  rl.question('Your guess: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log(
        '❌ Invalid input. Make sure it is a 4-digit number, no' +
          ' repeats, no leading 0.',
      );

      return askForGuess();
    }

    if (randNumber.toString() === input) {
      console.log('Lucky you, my congratulations! YOU WON!!!!');

      rl.close();

      return;
    }

    const { bulls, cows } = getBullsAndCows(input, randNumber);

    console.log(`bull: ${bulls} and cow: ${cows}`);

    return askForGuess();
  });
}

askForGuess();
