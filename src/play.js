/* eslint-disable no-console */
import readline from 'readline';
import getHint from './getHint.js';
import validInput from './validInput.js';

export const play = (secretNumber) => {
  function guessNumber(guess) {
    const isValid = validInput(guess);

    if (isValid) {
      speakWithUser(isValid, guessNumber);
    } else {
      const hint = getHint(secretNumber, guess);

      if (hint) {
        speakWithUser(hint, guessNumber);
      } else {
        console.log('You Goddamn right');
        terminal.close();
      }
    }
  }

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function speakWithUser(message, func) {
    terminal.on(message, func);
  }

  return speakWithUser('What is the guessed number? ', guessNumber);
};
