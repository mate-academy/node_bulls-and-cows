import { terminal } from './terminal.mjs';

export const getGuess = (message) => new Promise((resolve) => {
  terminal.question(message, async (guess) => {
    if (guess === "exit") {
      terminal.close();
    } else {
      resolve(guess);
    }
  });
});
