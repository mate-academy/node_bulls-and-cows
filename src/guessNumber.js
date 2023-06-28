'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./getBullsAndCows');
const { isNumberValid } = require('./isNumberValid');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = {
  error: 'Enter a valid number (4 unique digits): ',
  success: 'Congratulation! You did it!',
};

function guessNumber(secret, message) {
  terminal.question(message, (guess) => {
    if (!isNumberValid(guess)) {
      guessNumber(secret, messages.error);

      return;
    }

    const { bulls, cows } = getBullsAndCows(secret, guess);

    if (bulls !== secret.length) {
      guessNumber(secret, `Bulls: ${bulls}, cows: ${cows}\nTry again: `);

      return;
    }

    // eslint-disable-next-line no-console
    console.log(messages.success);
    terminal.close();
  });
}

module.exports = {
  guessNumber,
};
