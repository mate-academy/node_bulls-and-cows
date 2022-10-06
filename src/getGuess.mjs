import { terminal } from './terminal.mjs';

export const getGuess = (message) => new Promise((resolve) => {
  terminal.question(message, async (guess) => {
    resolve(guess);
  });
});
