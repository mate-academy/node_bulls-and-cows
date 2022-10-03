import { startGame } from './startGame.js';
import { terminal } from './terminal.js';
import { gameOptions } from './app.js';
import { generateSecret } from './generateSecret.js';

export const restartGame = () => {
  terminal.question('Do you want to start new game? y/n: ', (guess) => {
    if (guess.toLowerCase() === 'n') {
      terminal.close();
    } else if (guess.toLowerCase() === 'y') {
      const secret = generateSecret();

      startGame(gameOptions, secret);
    } else {
      restartGame();
    }
  });
};
