'use strict';

const readline = require('readline');

const { getBullsAndCows } = require('./getBullsAndCows');
const { isNumberValid } = require('./isNumberValid');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = {
  error: 'Please enter valid number (4 different digits) ',
  tryAgainMessage: 'Please, try again ',
  success: 'Congratulation! You did it)',
};

function guessNumber(secret, message) {
  terminal.question(message, (guess) => {
    if (!isNumberValid(guess)) {
      guessNumber(secret, messages.error);

      return;
    }

    const { bulls, cows } = getBullsAndCows(secret, guess);

    if (bulls !== 4) {
      guessNumber(
        secret,
        `bulls: ${bulls}, cows: ${cows}\n${messages.tryAgainMessage}`,
      );

      return;
    }

    // eslint-disable-next-line no-console
    console.log(messages.success);
    terminal.close();
  });
}

module.exports.guessNumber = guessNumber;
