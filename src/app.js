'use strict';

const readline = require('readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const secretNumber = generateRandomNumber();

  // eslint-disable-next-line no-console
  console.log('Welcome to the game! Your task is to find correct number!');

  const ask = () => {
    rl.question('Enter your number: ', (answer) => {
      if (!checkIsValidUserInput(answer)) {
        // eslint-disable-next-line no-console
        console.log('❌ Invalid input. Try again!');

        return ask();
      }

      const { bulls, cows } = getBullsAndCows(answer, secretNumber);

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log(
          `🎉 Congratulations! You guessed the number: ${secretNumber}`,
        );
        rl.close();
      } else {
        // eslint-disable-next-line no-console
        console.log(`Bulls: ${bulls}, Cows: ${cows}`);
        ask();
      }
    });
  };

  ask();
};

if (require.main === module) {
  main();
}

module.exports = { main };
