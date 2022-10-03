import { terminal } from './terminal.js';

export const getGuess = (message) => {
  return new Promise((resolve) => {
    terminal.question(message, async(guess) => {
      resolve(guess);
    });
  });
};
