'use strict';

const { isNumberValid } = require('./isNumberValid');
const { findBullsAndCows } = require('./findBullsAndCows');

const terminal = require('./terminal').terminal;

const messages = {
  error: 'Your number is not correct, try to enter another one\n',
  tryAgainMessage: 'Please, try again\n',
  success: 'You did it, Game over!)',
};

const guessNumber = (secret, message) => {
  terminal.question(message, (guess) => {
    if (!isNumberValid(guess)) {
      guessNumber(secret, messages.error);

      return;
    }

    const { bulls, cows } = findBullsAndCows(secret, guess);

    if (bulls !== 4) {
      const tryAgainMessage
        = `bulls: ${bulls}, cows: ${cows}\n` + messages.tryAgainMessage;

      guessNumber(secret, tryAgainMessage);

      return;
    }

    // eslint-disable-next-line no-console
    console.log(messages.success);

    terminal.close();
  });
};

exports.guessNumber = guessNumber;
