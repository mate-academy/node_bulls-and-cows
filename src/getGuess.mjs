import { terminal } from './terminal.mjs';

export const getGuess = (message) => {
  return new Promise((resolve) => {
    terminal.question(message, async(guess) => {
      resolve(guess);
    });
  });
};
