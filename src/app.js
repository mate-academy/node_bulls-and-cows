'use strict';

'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./generateRandomNumber');
const { checkIsValidUserInput } = require('./checkIsValidUserInput');
const { getBullsAndCows } = require('./getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  const secretNumber = generateRandomNumber().toString();

  function askGuess() {
    terminal.question('Enter your number: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        return askGuess();
      }

      const { bulls } = getBullsAndCows(secretNumber, userInput);

      if (bulls === 4) {
        terminal.close();
      } else {
        askGuess();
      }
    });
  }

  askGuess();
}

module.exports = {
  playGame,
};
