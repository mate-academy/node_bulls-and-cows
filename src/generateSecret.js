import { gameOptions } from './app.js';

export const generateSecret = () => {
  const secret = new Set();

  while (secret.size < gameOptions.level) {
    const number = Math.floor(Math.random() * 10);

    secret.add(number);
  }

  return [...secret];
};
