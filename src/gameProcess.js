'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { checkBullsAndCows } = require('./calcBullsAndCows');

const terminalInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const letsPlayGame = () => {
  terminalInterface.question(
    'Enter a four-digit number: ',
    (userNumber) => {
      if (userNumber.length !== 4) {
        console.log('It must be a four-digit number');

        return letsPlayGame();
      }

      if (!/^\d+$/.test(userNumber)) {
        console.log('It must contain only digits');

        return letsPlayGame();
      }

      const answer = checkBullsAndCows(userNumber);

      if (answer === 'Congratulations! You guessed the number') {
        console.log(`${answer}`);

        terminalInterface.question(
          'Do you want to play again? (Y/N): ',
          (playAgain) => {
            if (playAgain.toUpperCase() === 'Y') {
              console.log('Great! Let\'s play again!');
              letsPlayGame();
            } else {
              console.log('Thank you for playing. Goodbye!');
              terminalInterface.close();
            }
          }
        );
      } else {
        console.log(`Nice try! ${answer}`);
        letsPlayGame();
      }
    }
  );
};

module.exports = {
  letsPlayGame,
  terminalInterface,
};
