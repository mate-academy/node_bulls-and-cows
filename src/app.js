'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const randomNumber = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question('Enter a 4-digit number: ', (userInput) => {
    const isValid = checkIsValidUserInput(userInput);

    if (isValid) {
      const { bulls, cows } = getBullsAndCows(
        parseInt(userInput, 10),
        randomNumber,
      );
      // eslint-disable-next-line no-console
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congratulations! You guessed the number!');
        rl.close();
      } else {
        main();
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('Invalid input. Please enter a valid 4-digit number.');
      main();
    }
  });
}

main();
