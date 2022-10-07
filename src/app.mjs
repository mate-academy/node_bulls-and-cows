import { generateSecret } from './generateSecret.mjs';
import { startGame } from './startGame.mjs';

export const gameOptions = {
  level: 4,
};

const secret = generateSecret(gameOptions.level);

startGame(gameOptions, secret);
